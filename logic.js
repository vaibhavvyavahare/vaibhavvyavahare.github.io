document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Event listener for the "Add Task" button
    addTaskBtn.addEventListener('click', addTask);
    
    // Allows adding a task by pressing the Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    /**
     * Creates and appends a new task item to the list.
     */
    function addTask() {
        // 1. Get and clean the task text
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // 2. Create the new list item (<li>) and its contents
        const listItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');
        
        // Create a button for removing the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.classList.add('delete-btn');

        // 3. Attach event listeners for dynamic functionality

        // Mark task as completed (toggle 'completed' class)
        taskSpan.addEventListener('click', () => {
            // DOM Manipulation: Toggle a CSS class
            listItem.classList.toggle('completed');
        });

        // Remove task from the list
        deleteBtn.addEventListener('click', () => {
            // DOM Manipulation: Remove the list item from its parent (taskList)
            taskList.removeChild(listItem);
        });

        // 4. Assemble the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        // 5. Add the new list item to the main list
        // DOM Manipulation: Append the new <li> to the <ul>
        taskList.appendChild(listItem);

        // 6. Clear the input field for the next task
        taskInput.value = '';
        taskInput.focus(); // Keep focus on input for quick entry
    }
});
