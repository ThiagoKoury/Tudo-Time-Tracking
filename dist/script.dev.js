"use strict";

/*jshint esversion: 6 */
// Init task list
var tasks = []; // Methods

function secondsToTimeString(timeInSeconds) {
  var hours = Math.floor(timeInSeconds / 3600);
  var minutes = Math.floor(timeInSeconds / 60) % 60;
  var seconds = Math.floor(timeInSeconds - hours * 3600 + minutes * 60) % 60;
  var h = hours.toString().padStart(2, '0');
  var i = minutes.toString().padStart(2, '0');
  var s = seconds.toString().padStart(2, '0');
  console.log(timeInSeconds);
  return "".concat(h, ":").concat(i, ":").concat(s);
}

function renderTask(newTask) {
  var baseTask = document.getElementById('base-task'); // Clone basetask element

  var newTaskElement = baseTask.cloneNode(true); // Remove base task id

  newTaskElement.id = "task-".concat(tasks.length); // Add Texts and time, ...

  newTaskElement.setAttribute('data-id-tarefa', newTask.id);
  document.getElementById('list-task').appendChild(newTaskElement);
  document.querySelector("#".concat(newTaskElement.id, " .name")).innerText = newTask.name;
  setInterval(function () {
    return startTimeTrack(newTask.time);
  }, 1000);

  function startTimeTrack(second) {
    document.querySelector("#".concat(newTaskElement.id, " .time")).innerText = secondsToTimeString(second);
    second++;
  }

  addRemoveTaskListener(newTaskElement.id);
}

function addTask(newTask) {
  tasks.push(newTask);
  renderTask(newTask);
  console.log(tasks);
} // Listeners


function handleAddNewTaskButtonClick() {
  var newTaskName = document.getElementById('new-task-name').value.trim();

  if (newTaskName === '') {
    return alert('Invalid name');
  }

  var newTask = {
    id: Date.now(),
    name: newTaskName,
    time: 0,
    paused: true,
    completed: false
  };
  addTask(newTask);
}

function findMatchParent(matchClassName, element) {
  var currentElement = element;

  while (currentElement.classList.has(matchClassName)) {
    currentElement = currentElement.parent;
  }

  return currentElement;
}

function removeTask(taskId, taskElement) {
  var taskIndex = tasks.findIndex(function (task) {
    return task.id === parseInt(taskId, 10);
  });

  if (taskIndex === -1) {
    return alert('Task not found');
  }

  tasks.splice(taskIndex, 1);
  taskElement.remove();
  console.log(tasks);
}

function addRemoveTaskListener(taskElementId) {
  var taskElement = document.getElementById(taskElementId);
  var taskId = taskElement.getAttribute('data-id-tarefa');
  taskElement.addEventListener('click', function () {
    return removeTask(taskId, taskElement);
  });
}

window.onload = function () {
  console.log('[TIME TRACKING] Start');
  var addTaskButton = document.getElementById('add-task');
  addTaskButton.addEventListener('click', handleAddNewTaskButtonClick);
};