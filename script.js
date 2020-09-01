/*jshint esversion: 6 */

// Init task list
const tasks = [];

// Methods

function secondsToTimeString(timeInSeconds) {
    
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds / 60) % 60;
    const seconds = Math.floor(timeInSeconds - hours * 3600 + minutes * 60) % 60;
    const h = hours.toString().padStart(2, '0');
    const i = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    console.log(timeInSeconds);
    return `${h}:${i}:${s}`;
}



function renderTask(newTask) {
    const baseTask = document.getElementById('base-task');
    // Clone basetask element
    const newTaskElement = baseTask.cloneNode(true);
    // Remove base task id
    newTaskElement.id = `task-${tasks.length}`;
    // Add Texts and time, ...
    newTaskElement.setAttribute('data-id-tarefa', newTask.id);
    document.getElementById('list-task').appendChild(newTaskElement);
    document.querySelector(`#${newTaskElement.id} .name`).innerText = newTask.name;
    setInterval(() => startTimeTrack(newTask.time), 1000);
    
    function startTimeTrack(second){
        document.querySelector(`#${newTaskElement.id} .time`).innerText = secondsToTimeString(second);
        second++;
    }

    addRemoveTaskListener(newTaskElement.id);
}

function addTask(newTask) {
    tasks.push(newTask);
    renderTask(newTask);
    console.log(tasks);
}

// Listeners

function handleAddNewTaskButtonClick() {
    const newTaskName = document.getElementById('new-task-name').value.trim();
    if (newTaskName === '') {
        return alert('Invalid name');
    }
    const newTask = {
        id: Date.now(),
        name: newTaskName,
        time: 0,
        paused: true,
        completed: false
    };
    addTask(newTask);
}

function findMatchParent(matchClassName, element) {
    let currentElement = element;
    while (currentElement.classList.has(matchClassName)) {
        currentElement = currentElement.parent;
    }
    return currentElement;
}

function removeTask(taskId, taskElement) {
    const taskIndex = tasks.findIndex(function(task) {
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
    const taskElement = document.getElementById(taskElementId);
    const taskId = taskElement.getAttribute('data-id-tarefa');
    taskElement.addEventListener('click', () => removeTask(taskId, taskElement));
}

window.onload = () => {
    console.log('[TIME TRACKING] Start');

    const addTaskButton = document.getElementById('add-task');
    addTaskButton.addEventListener('click', handleAddNewTaskButtonClick);
};