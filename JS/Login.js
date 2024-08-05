function login(event) {

    event.preventDefault();

    var username = document.getElementById("user").value;
    if (username == '')
        alert("User name is empty");
    var password = document.getElementById("pass").value;
    if (password == '')
        alert("Password is empty");
    var radio = document.getElementsByName("as");
    if (radio[0].checked && radio[0].value != '') {
        var as = "Admin";
    }
    else if (radio[1].checked && radio[1].value != '') {
        var as = "Teacher";
    } 
    let bool=false;
    let storedUsers = JSON.parse(window.localStorage.user);

    for(let i = 0; i <storedUsers.length; i++ ){
        if (storedUsers[i].username == username &&storedUsers[i].password == password &&storedUsers[i].type == as) {
            alert("Login successfully!");
            window.localStorage.IndexOfLogin = i;
            if(radio[0].checked){
                window.location.href = "AdminHome.html";
            }
            if(radio[1].checked){
                window.location.href = "TeacherPage.html";
            }
            bool=true
            break;
        }
    }

    if(!bool) {
        alert("Incorrect user name or password, try again please!");
        window.location.reload();
    }
}