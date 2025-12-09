const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


document.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const task = {
    text: taskText,
    completed: false
  };

  addTaskToDOM(task);
  saveTask(task);
  taskInput.value = '';
}


function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task.text;

  if (task.completed) li.classList.add('completed');

  li.addEventListener('click', () => toggleTask(task.text));
  
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('deleteBtn');
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTask(task.text);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}


function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(addTaskToDOM);
}


function toggleTask(taskText) {
  let tasks = getTasks();
  tasks = tasks.map(t => {
    if (t.text === taskText) t.completed = !t.completed;
    return t;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  refreshList();
}


function deleteTask(taskText) {
  let tasks = getTasks();
  tasks = tasks.filter(t => t.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  refreshList();
}

function refreshList() {
  taskList.innerHTML = '';
  loadTasks();
}
