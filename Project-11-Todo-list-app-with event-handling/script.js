const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  addTask(taskText);
  taskInput.value = ''; 
});


function addTask(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete';

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}


taskList.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'SPAN') {
    
    e.target.parentElement.classList.toggle('completed');
  }
});
