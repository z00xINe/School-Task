class task {
    constructor(id, title,TeacherName,description,py,complete) {
        this.id = id;
        this.title = title;
        this.TeacherName = TeacherName;
        this.description = description;
        this.py = py
        this.complete = complete;
    }
}
let id = window.localStorage.id ? parseInt(window.localStorage.id) : 0;
window.localStorage.id = id;

let tasks = window.localStorage.tasks ? JSON.parse(window.localStorage.tasks) : [];

function Added(event) {
    event.preventDefault();
    var TaskId = document.getElementById("TaskId").value;
    var unique = true;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == TaskId) {
            unique = false;
            break;
        }
    }
    var chk = true;
    if (TaskId == '') {
        alert("Task id is empty");
        chk = false;
    }
    else if (!unique) {
        alert("This id is exist, try another id");
        chk = false;
    }
    var TaskTitle = document.getElementById("TaskTitle").value;
    if (TaskTitle == '') {
        alert("Task title is empty");
        chk = false;
    }
    var TeacherName = document.getElementById("TeacherName").value;
    if (TeacherName == '') {
        alert("Teacher name is empty");
        chk = false;
    }
    var des = document.getElementById("5").value;
    if (des == '') {
        alert("Description is empty");
        chk = false;
    }
    var radio = document.getElementsByName("Piority");
    let pr;
    if (radio[0].checked) {
        pr = 'Low';
    }
    else if (radio[1].checked ) {
        pr = 'Medium';
    }
    else if (radio[2].checked) {
        pr = 'High';
    }
    else {
        alert("You didn't choose 'Piority'");
        chk = false;
    }

    if (chk) {
        let obj = new task(TaskId, TaskTitle, TeacherName, des, pr, false);
        tasks.push(obj);
        window.localStorage.id++;
        window.localStorage.tasks = JSON.stringify(tasks);
        window.location.href = "AdminHome.html";
    }

    else {
        alert("Can not add task, try again!");
        window.location.reload();
    }
}