
const addTaskInput = document.getElementById('addtask');
const addBtn = document.getElementById('addbtn');
const taskList = document.getElementById('tasklist');

addBtn.addEventListener('click', () => {
  
  const task = addTaskInput.value.trim();

  
  if (task) {
    
    const listItem = document.createElement('li');
    listItem.textContent = task;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    
    deleteBtn.addEventListener('click', () => {
      
      taskList.querySelector('ul').removeChild(listItem);
    });

   
    listItem.appendChild(deleteBtn);

    
    taskList.querySelector('ul').appendChild(listItem);

    
    addTaskInput.value = '';
  }
});