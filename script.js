// Get the HTML elements
const addTaskInput = document.getElementById('addtask');
const addBtn = document.getElementById('addbtn');
const taskList = document.getElementById('tasklist');

// Add an event listener to the Add button
addBtn.addEventListener('click', () => {
  // Get the input value
  const task = addTaskInput.value.trim();

  // Check if the input value is not empty
  if (task) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add an event listener to the delete button
    deleteBtn.addEventListener('click', () => {
      // Remove the list item from the task list
      taskList.querySelector('ul').removeChild(listItem);
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.querySelector('ul').appendChild(listItem);

    // Clear the input field
    addTaskInput.value = '';
  }
});