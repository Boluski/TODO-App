//<div class="task 1">
//  <p>Do something</p>
//  <button class="mark">C</button>
//  <button class="delete 1">D</button>
//</div>

function getInput(){
    let task = document.querySelector('.addTask');
    let data = task.value;
    task.value = '';
    return data;
}

let taskId = 0;
function makeTask(taskName){
    let container = document.querySelector('.container');
    let taskDiv = document.createElement('div');
    let name = document.createElement('p');
    let completeTask = document.createElement('button');
    let deleteTask = document.createElement('button');

    name.textContent = taskName;
    taskDiv.setAttribute('id', taskId);
    taskDiv.setid
    taskDiv.setAttribute('class', 'task');
    deleteTask.setAttribute('class', 'delete');
    deleteTask.textContent = 'D';
    completeTask.setAttribute('class', 'mark');
    completeTask.textContent = 'C';

    taskDiv.appendChild(name);
    taskDiv.appendChild(completeTask);
    taskDiv.appendChild(deleteTask);
    container.appendChild(taskDiv);
    taskId++;
}

let task = document.querySelector('.addTask');

task.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        let newTask = getInput();
        makeTask(newTask);
    }
})

let taskCompleted = 1;
document.addEventListener('click', (event) => {
    let taskToDelete = event.target.parentElement;
    if(event.target.className == 'delete'){
        taskToDelete.remove();
    }else if(event.target.className == 'mark'){
        taskToDelete.remove();
        task.setAttribute('placeholder', 'Task(s) completed: ' + taskCompleted);
        taskCompleted++
    }
})