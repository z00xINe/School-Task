document.addEventListener("DOMContentLoaded", function () {
    let tasks = JSON.parse(window.localStorage.getItem('tasks'));

    tasks.forEach(task => {
        if (task.complete == false) {
            var parent = document.querySelector(".ava_tasks");
            var NewTask = document.createElement("div");
            NewTask.className = "task";
            NewTask.id = `t${task.id}`;
            NewTask.innerHTML = `
            <h4>${task.title}${task.id}</h4>
            <p>${task.description}</p>`;
            parent.appendChild(NewTask);
        }
        else {
            var parent = document.querySelector(".com_tasks");
            var NewTask = document.createElement("div");
            NewTask.className = "task";
            NewTask.id = `t${task.id}`;
            NewTask.innerHTML = `
            <h4>${task.title}${task.id}</h4>
            <p>${task.description}</p>`;
            parent.appendChild(NewTask);
        }
    });
});