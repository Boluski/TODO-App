function getInput(){
    let task = document.querySelector('.addTask').value;
    return task;
}

function makeTask(taskName){
    let container = document.querySelector('.container');
    let taskDiv = document.createElement('div');
    let name = document.createElement('p');
    let completeTask = document.createElement('button');
    let deleteTask = document.createElement('button');

    name.textContent = taskName;
    taskDiv.className = 'task';
    deleteTask.className = 'delete';
    deleteTask.textContent = 'D'
    completeTask.className = 'mark';
    completeTask.textContent = 'C'

    taskDiv.appendChild(name);
    taskDiv.appendChild(completeTask);
    taskDiv.appendChild(deleteTask);
    container.appendChild(taskDiv);
}

// run only when the return button is pressed
function addNew(){
    let newTask = getInput();
    makeTask(newTask);
}
