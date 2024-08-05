function Deleted(n) {
    let tasks = JSON.parse(window.localStorage.getItem('tasks'))
    var task = document.getElementById(`t${n}`);
    let conf = confirm("Are you sure?");

    if (conf == true) {
        task.remove();
        alert("Done!");
        const removeIndex = tasks.findIndex(item => item.id == n);
        tasks.splice(removeIndex, 1);
        window.localStorage.tasks = JSON.stringify(tasks);
    }
}

function pass(id) {
    window.localStorage.targetId = id;
}

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

    if (tasks.length > 0) {
        var parent = document.querySelector(".con");
        tasks.forEach(task => {
            if (!task.complete && (task.py == pr || pr == "All")) {
                var NewTask = document.createElement("div");
                NewTask.className = "task";
                NewTask.id = `t${task.id}`;
                NewTask.innerHTML = `
                <h4>${task.title}${task.id}</h4>
                <p>${task.description}</p>`;
                parent.appendChild(NewTask);
                var buttons = document.createElement("div");
                buttons.className = "buttons";
                var editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.onclick = function () {
                    pass(task.id);
                    window.location.href = "EditTask.html";
                };
                var deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.onclick = function () {
                    Deleted(task.id);
                };
                buttons.appendChild(editButton);
                buttons.appendChild(deleteButton);
                NewTask.appendChild(buttons);
            }
        });
    }
});

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