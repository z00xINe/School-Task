document.addEventListener("DOMContentLoaded", function () {

    var radio = document.getElementsByName("Piority");
    let pr = window.localStorage.p;

    if (pr == "All") {
        radio[0].checked = true;
    }
    else if (pr == "Low") {
        radio[1].checked = true;
    }
    else if (pr == "Medium") {
        radio[2].checked = true;
    }
    else if (pr == "High") {
        radio[3].checked = true;
    }

    let tasks = JSON.parse(window.localStorage.getItem('tasks'));

    tasks.forEach(t => {
        var task = document.getElementById(`t${t.id}`);
        if (task) {
            task.remove();
        }
    });

    tasks.forEach(task => {
        if (!task.complete && (task.py == pr || pr == "All")) {
            var parent = document.querySelector(".ava_tasks");
            var NewTask = document.createElement("div");
            NewTask.className = "task";
            NewTask.id = `t${task.id}`;
            NewTask.innerHTML = `
            <h4>${task.title}${task.id}</h4>
            <p>${task.description}</p>`;
            parent.appendChild(NewTask);
            var buttons = document.createElement("div");
            buttons.className = "buttons";
            var completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.type = "button";
            completeButton.onclick = function () {
                Completed(task.id);
            };
            var ViewButton = document.createElement("button");
            ViewButton.textContent = "View Details";
            ViewButton.type = "button";
            ViewButton.onclick = function () {
                pass(task.id);
                window.location.href = "ViewDetailsTask.html";
            };
            buttons.appendChild(ViewButton);
            buttons.appendChild(completeButton);
            NewTask.appendChild(buttons);
        }
    });
});

function Completed(id) {
    let tasks = JSON.parse(window.localStorage.tasks);
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].complete = true;
            window.localStorage.tasks = JSON.stringify(tasks);
            window.location.reload();
        }
    }
}

function pass(id) {
    window.localStorage.targetId = id;
}

function pi(i) {
    if (i == 0) {
        window.localStorage.p = "All";
    }
    else if (i == 1) {
        window.localStorage.p = "Low";
    }
    else if (i == 2) {
        window.localStorage.p = "Medium";
    }
    else if (i == 3) {
        window.localStorage.p = "High";
    }

    window.location.reload();
};