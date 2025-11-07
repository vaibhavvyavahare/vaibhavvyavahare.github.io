#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
#include <chrono>
#include <random>


const int BUFFER_SIZE = 10; 

/
std::queue<int> buffer; 

/
std::mutex buffer_mutex; 

.
std::condition_variable producer_cv; 

std::condition_variable consumer_cv; 


bool stop_flag = false; 


void producer(int id, int max_items) {
    std::default_random_engine generator;
    std::uniform_int_distribution<int> distribution(100, 999);
    int items_produced = 0;

    while (items_produced < max_items) {
       
        int item = distribution(generator);
        
     
        std::unique_lock<std::mutex> lock(buffer_mutex);

      
        producer_cv.wait(lock, [&] { return buffer.size() < BUFFER_SIZE || stop_flag; });

        if (stop_flag) break; 
        
        buffer.push(item);
        items_produced++;
        std::cout << "[Producer " << id << "]: Produced Item " << item 
                  << ". Buffer size: " << buffer.size() << std::endl;
        
       
        lock.unlock(); 
        consumer_cv.notify_one(); 
        
        
        std::this_thread::sleep_for(std::chrono::milliseconds(200)); 
    }
}


void consumer(int id, int max_items) {
    int items_consumed = 0;

    while (items_consumed < max_items) {
        
        std::unique_lock<std::mutex> lock(buffer_mutex);

        
        consumer_cv.wait(lock, [&] { return !buffer.empty() || stop_flag; });

        if (stop_flag && buffer.empty()) break; 

       
        int item = buffer.front();
        buffer.pop();
        items_consumed++;
        std::cout << "[Consumer " << id << "]: Consumed Item " << item 
                  << ". Buffer size: " << buffer.size() << std::endl;

        
        lock.unlock();
        producer_cv.notify_one(); 
        
        
        std::this_thread::sleep_for(std::chrono::milliseconds(300)); 
    }
}

int main() {
    
    std::cout << "--- Producer-Consumer Problem Simulation (Multithreading) ---" << std::endl;
  
    

   
    const int PRODUCER_COUNT = 2;
    const int CONSUMER_COUNT = 2;
    const int ITEMS_PER_PRODUCER = 5; 
    const int ITEMS_PER_CONSUMER = 5;

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
