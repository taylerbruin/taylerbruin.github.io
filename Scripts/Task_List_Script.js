class Task {
    constructor({ text, date, done, id }) {
        this.text = preventHack(text);
        this.date = date;
        this.done = done;
        this.id = id;
        //  document.getElementById("list").innerHTML += this.toHTML();
    }
    toHTML() {
        if (this.done == false) {
            return `
        <li class="task" task-id="${this.id}">
            <span class="material-symbols-outlined" id = "${this.id}" onclick="updateTask(this.id)">check_box_outline_blank</span>
            <label class ="task-description" for = "${this.id}" task-id="${this.id}">${this.text}</label>
            <span class="material-symbols-outlined delete-button" id = "${this.id}" onclick="deleteTask(this.id)">Remove</span>
            <span class ="task-date">${this.prettyDate()}</span>
        </li>
        `
        }
        else {
            return `
        <li class="task" task-id="${this.id}">
            <span class="material-symbols-outlined" id = "${this.id}" onclick="updateTask(this.id)">check_box</span>
            <label class ="task-description linethrough" for = "${this.id}" task-id="${this.id}">${this.text}</label>
            <span class="material-symbols-outlined delete-button" id = "${this.id}" onclick="deleteTask(this.id)">Remove</span>
            <span class ="task-date linethrough">${this.prettyDate()}</span>
        </li>
        `
        }
    }
    prettyDate() {
        var date = this.date.split("-");
        return date[1] + '/' + date[2] + '/' + date[0];
    }
    toggle() {
        return !this.done;
    }
}

let tasks = [];
tasks = this.readStorage();
this.readTask();

document.getElementById('actionText').value = localStorage.getItem('inputBoxText');
var date = localStorage.getItem('inputBoxDate');
document.getElementById('date completed').value = date;
function createTask(event) {
    event.preventDefault()
    // Collects input from the forum and saves it into the Local Storage, then call the readTasks function

    let inputTask = document.getElementById('actionText').value;
    let inputDate = document.getElementById('date completed').value;

    var newListItem = new Task({ text: inputTask, date: inputDate, done: false, id: Date.now() });

    tasks = this.readStorage();

    tasks.push(newListItem);

    localStorage.removeItem('inputBoxText');
    localStorage.removeItem('inputBoxDate');
    this.updateStorage(tasks);
    this.readTask();

}
function readTask() {
    // TODO: Pull in tasks from local storage
    // TODO: Parse tasks using the toHTML() function
    // TODO: Update DOM accordingly
    var list = document.getElementById("list");
    list.innerHTML = '';

    tasks = this.readStorage();

    for (var i = 0; i < tasks.length; i++) {
        list.innerHTML += tasks[i].toHTML();
    }
}
function updateTask(id) {
    // TODO: Update the task in `tasks` array by flipping it's `done` value
    // TODO: Save to local storage
    // TODO: Make the DOM update
    objIndex = tasks.findIndex((obj => obj.id == id));
    tasks[objIndex].done = !tasks[objIndex].done;
    this.updateStorage(tasks);
    this.readTask();
}

function deleteTask(id) {
    objIndex = tasks.findIndex((obj => obj.id == id));
    tasks.splice(objIndex, 1);
    this.updateStorage(tasks);
    this.readTask();
}
function readStorage() {
    let jsonString = localStorage.getItem('database');
    let result = JSON.parse(jsonString) || [];
    result = result.map(taskData => new Task(taskData));
    return result;
}
function updateStorage(newData) {
    jsonString = JSON.stringify(newData);
    localStorage.setItem('database', jsonString);
    return;
}
function compDates(a, b) {
    if (a.date > b.date) {
        return 1;
    }
    else if (a.date < b.date) {
        return -1;
    }
    return 0;
}
var sortedDate = false;
var tempTasks = [...tasks];
function sortByDate() {
    //console.log("got to start")
   // var tempTasks = [...tasks];
    tempTasks.sort(compDates);
    //console.log(sortedDate);
    if (sortedDate == true) {
        this.readTask();
        sortedDate = false;

    }
    else {
        var list = document.getElementById('list');
        list.innerHTML = '';

        for (var i = 0; i < tempTasks.length; i++) {
            list.innerHTML += tempTasks[i].toHTML();
        }
        sortedDate = true;
    }
    if (sortedCompletion == true) {
        sortedCompletion = false;
        this.sortByDone();
    }
    //this.updateStorage(tasks);
    //this.readTask();

    return;
}
var sortedCompletion;

function compareCompletion(a) {
    //console.log(a);
    if (a.done != true) {
        return a;
    }
    else {
        return;
    }
}

function sortByDone() {
  //  var tempTasks = tasks;
    tempTasks = tempTasks.filter(compareCompletion => compareCompletion.done != true);
    if (sortedCompletion == true) {
        this.readTask();
        sortedCompletion = false;
    }
    else {
        var list = document.getElementById('list');
        list.innerHTML = '';
        for (var i = 0; i < tempTasks.length; i++) {
            list.innerHTML += tempTasks[i].toHTML();
        }
        sortedCompletion = true;
    }
    //this.updateStorage(tasks);
    //this.readTask();
    return;
}
function preventHack(string) {
    const map = {
        '<': '&lt;',
        '>': '&gt;',
    };
    const reg = /[<>]/ig;
    return string.replace(reg, (match) => (map[match]));
}
function saveInputText() {
    //console.log('Saving Input Text');
    var saveText = document.getElementById('actionText').value;
    localStorage.setItem('inputBoxText', saveText);
    return;
}

function saveInputDate() {
    //console.log('Saving Input Date');
    var saveDate = document.getElementById('date completed').value;
    localStorage.setItem('inputBoxDate', saveDate);
    return;
}