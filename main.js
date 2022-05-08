//<div class="task 1">
//  <p>Do something</p>
//  <button class="mark">C</button>
//  <button class="delete 1">D</button>
//</div>

//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!----><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>

function trashIcon(){
    let trash = document.createElement('i');
    trash.setAttribute('class', 'fa fa-trash');
    return trash
}

function checkIcon(){
    let check = document.createElement('i');
    check.setAttribute('class', 'fa fa-check');
    return check
}

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
    let trashSVG = trashIcon();
    let checkSVG = checkIcon();

    name.textContent = taskName;
    taskDiv.setAttribute('id', taskId);
    taskDiv.setid
    taskDiv.setAttribute('class', 'task');
    deleteTask.setAttribute('class', 'delete');
    deleteTask.appendChild(trashSVG);
    completeTask.setAttribute('class', 'mark');
    completeTask.appendChild(checkSVG);

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
        if(newTask != ''){
            makeTask(newTask);
        }
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