document.addEventListener("DOMContentLoaded", function () {

    let tasks = JSON.parse(window.localStorage.tasks);

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == window.localStorage.targetId) {
            window.localStorage.edit = i;
            document.getElementsByName('TaskId')[0].value = tasks[i].id;
            document.getElementsByName('TaskTitle')[0].value = tasks[i].title;
            document.getElementsByName('TeacherName')[0].value = tasks[i].TeacherName;
            document.getElementById('5').textContent = tasks[i].description;
            var radio = document.getElementsByName("Piority");
            if (tasks[i].py == "Low") {
                radio[0].checked = true;
            }
            else if (tasks[i].py == "Medium") {
                radio[1].checked = true;
            }
            else if (tasks[i].py == "High") {
                radio[2].checked = true;
            }
            break;
        }
    }
});

function Update(event) {

    event.preventDefault();

    let tasks = JSON.parse(window.localStorage.tasks);

    var TaskId = document.getElementById("TaskId").value;
    var unique = true;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == TaskId && TaskId != window.localStorage.targetId) {
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
        alert("Not available id, try another id");
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
    else if (radio[1].checked) {
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
        tasks[window.localStorage.edit].id = TaskId;
        tasks[window.localStorage.edit].title = TaskTitle;
        tasks[window.localStorage.edit].TeacherName = TeacherName;
        tasks[window.localStorage.edit].description = des;
        tasks[window.localStorage.edit].py = pr;
        window.localStorage.tasks = JSON.stringify(tasks);
        window.location.href = "AdminHome.html";
    }

    else {
        alert("Can not add task, try again!");
        window.location.reload();
    }
}