document.addEventListener("DOMContentLoaded", function () {
    let storedUsers = JSON.parse(window.localStorage.user);
    let i = window.localStorage.IndexOfLogin;
    document.getElementsByName("email")[0].value = storedUsers[i].email;
    document.getElementsByName("type")[0].value = storedUsers[i].type;
    document.getElementsByName("user")[0].value = storedUsers[i].username;
    document.getElementsByName("num")[0].value = storedUsers[i].num;
    if (storedUsers[i].about != undefined) {
        document.getElementsByName("about")[0].value = storedUsers[i].about;
    }
});

function Saving(event) {

    event.preventDefault();

    let storedUsers = JSON.parse(window.localStorage.user);
    let i = window.localStorage.IndexOfLogin;
    let chk = true;

    var oldPassword = document.getElementById("old pass").value;
    var newPassword = document.getElementById("new pass").value;
    var conf = document.getElementById("confirm").value;

    if (oldPassword == '') {
        alert("Old password is empty");
        chk = false;
    }
    else if (oldPassword != storedUsers[i].password) {
        alert("Old password is wrong!");
        chk = false;
    }
    if (newPassword == '') {
        alert("New password is empty");
        chk = false;
    }
    else if (newPassword != conf) {
        alert("Don't same password");
        chk = false;
    }
    else if (newPassword.length < 8) {
        alert("Password must be at least 8 characters long");
        chk = false;
    }

    var email = document.getElementById("email").value;

    var num = document.getElementById("num").value;
    let v = /^(01)\d{9}$/;

    if (num == '') {
        alert("Phone number is empty");
        chk = false;
    }
    else if (!v.test(num)) {
        alert("Invalid phone number");
        chk = false;
    }

    var about = document.getElementById("about").value;

    if (about == '') {
        alert("'About' is empty");
        chk = false;
    }

    if (chk) {
        storedUsers[i].email = email;
        storedUsers[i].password = newPassword;
        storedUsers[i].num = num;
        storedUsers[i].about = about;
        window.localStorage.user = JSON.stringify(storedUsers);
        window.location.href = "ProfilePage.html";
    }

    else {
        alert("Can not save edit, please try again!");
        window.location.reload();
    }
}