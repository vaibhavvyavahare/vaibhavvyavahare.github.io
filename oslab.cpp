#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
#include <chrono>
#include <random>

// --- Global Constants and Shared Resources ---

// The size of the shared buffer (analogous to shared memory)
const int BUFFER_SIZE = 10; 

// The queue acts as the shared buffer where items are stored
std::queue<int> buffer; 

// Mutex to protect the shared buffer from simultaneous access
std::mutex buffer_mutex; 

// Condition variables for signaling:
// 1. producer_cv: Producer waits on this when the buffer is full.
std::condition_variable producer_cv; 
// 2. consumer_cv: Consumer waits on this when the buffer is empty.
std::condition_variable consumer_cv; 

// Flag to signal threads to stop
bool stop_flag = false; 

/**
 * @brief The Producer thread function.
 * * Generates data items and attempts to place them into the shared buffer.
 * It waits if the buffer is full.
 */
void producer(int id, int max_items) {
    std::default_random_engine generator;
    std::uniform_int_distribution<int> distribution(100, 999);
    int items_produced = 0;

    while (items_produced < max_items) {
        // 1. Generate item and acquire lock
        int item = distribution(generator);
        
        // Use std::unique_lock for condition variables
        std::unique_lock<std::mutex> lock(buffer_mutex);

        // 2. Wait condition: If the buffer is full, wait.
        // The lock is released while waiting, and reacquired upon notification.
        producer_cv.wait(lock, [&] { return buffer.size() < BUFFER_SIZE || stop_flag; });

        if (stop_flag) break; // Exit if stop is signaled while waiting

        // 3. Produce (add item to the buffer)
        buffer.push(item);
        items_produced++;
        std::cout << "[Producer " << id << "]: Produced Item " << item 
                  << ". Buffer size: " << buffer.size() << std::endl;
        
        // 4. Unlock and Notify the Consumer
        lock.unlock(); // Explicitly unlock before notifying for minor optimization (optional)
        consumer_cv.notify_one(); // Wake up one waiting consumer thread
        
        // Simulate work time
        std::this_thread::sleep_for(std::chrono::milliseconds(200)); 
    }
}

/**
 * @brief The Consumer thread function.
 * * Attempts to retrieve and consume data items from the shared buffer.
 * It waits if the buffer is empty.
 */
void consumer(int id, int max_items) {
    int items_consumed = 0;

    while (items_consumed < max_items) {
        // 1. Acquire lock
        std::unique_lock<std::mutex> lock(buffer_mutex);

        // 2. Wait condition: If the buffer is empty, wait.
        consumer_cv.wait(lock, [&] { return !buffer.empty() || stop_flag; });

        if (stop_flag && buffer.empty()) break; // Exit if stop is signaled AND buffer is empty

        // 3. Consume (remove item from the buffer)
        int item = buffer.front();
        buffer.pop();
        items_consumed++;
        std::cout << "[Consumer " << id << "]: Consumed Item " << item 
                  << ". Buffer size: " << buffer.size() << std::endl;

        // 4. Unlock and Notify the Producer
        lock.unlock(); // Explicitly unlock before notifying
        producer_cv.notify_one(); // Wake up one waiting producer thread
        
        // Simulate work time
        std::this_thread::sleep_for(std::chrono::milliseconds(300)); 
    }
}

int main() {
    // Set up environment for clear output
    std::cout << "--- Producer-Consumer Problem Simulation (Multithreading) ---" << std::endl;
    std::cout << "Shared Buffer Capacity: " << BUFFER_SIZE << std::endl;
    std::cout << "------------------------------------------------------------" << std::endl;

    // Parameters for the simulation
    const int PRODUCER_COUNT = 2;
    const int CONSUMER_COUNT = 2;
    const int ITEMS_PER_PRODUCER = 5; 
    const int ITEMS_PER_CONSUMER = 5;

    // Vector to hold the thread objects
    std::vector<std::thread> threads;

    // Start Producer threads
    for (int i = 0; i < PRODUCER_COUNT; ++i) {
        threads.emplace_back(producer, i + 1, ITEMS_PER_PRODUCER);
    }

    // Start Consumer threads
    for (int i = 0; i < CONSUMER_COUNT; ++i) {
        threads.emplace_back(consumer, i + 1, ITEMS_PER_CONSUMER);
    }

    // Wait for all threads to finish their assigned tasks
    for (auto& t : threads) {
        t.join();
    }
    
    // Signal a general stop just in case any thread is still waiting (though they should have exited)
    {
        std::lock_guard<std::mutex> lock(buffer_mutex);
        stop_flag = true;
    }
    producer_cv.notify_all();
    consumer_cv.notify_all();

    std::cout << "------------------------------------------------------------" << std::endl;
    std::cout << "Simulation finished. All producers and consumers completed their tasks." << std::endl;
    std::cout << "Final Buffer Size: " << buffer.size() << std::endl;

    return 0;
}