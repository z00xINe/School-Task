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

function edit() {
    window.location.href = "EditProfilePage.html";
}