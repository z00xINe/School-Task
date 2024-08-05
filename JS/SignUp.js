class useracc{
    constructor(username,email,password,num,type,about){
        this.username=username;
        this.email=email;
        this.password=password;
        this.num=num;
        this.type = type;
        this.about = about;
    }
}
let inx = window.localStorage.inx ? parseInt(window.localStorage.inx) : 0;
window.localStorage.inx = inx;

let user = window.localStorage.user ? JSON.parse(window.localStorage.user) : [];

function Submited(event) {
    event.preventDefault();
    var chk = true;
    var username = document.getElementById("user").value;
    if (username == '') {
        alert("User name is empty");
        chk = false;
    }
    else if (username.length < 6) {
        alert("Username must be at least 6 characters long");
        chk = false;
    }

    var email = document.getElementById("email").value;

    var password = document.getElementById("pass").value;
    var conf = document.getElementById("Cpass").value;
    if (password == '') {
        alert("Password is empty");
        chk = false;
    }
    else if (password != conf) {
        alert("Don't same password");
        chk = false;
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        chk = false;
    }

    var num = document.getElementById("num").value;
    let v =/^(01)\d{9}$/ ;
    if (num == '') {
        alert("Phone number is empty");
        chk = false;
    }
    else if (!v.test(num)) {
        alert("Invalid phone number");
        chk = false;
    }

    var radio = document.getElementsByName("as");
    var type;
    if (radio[0].checked) {
        type="Admin";
    }
    else if (radio[1].checked) {
        type="Teacher";
    }
    else
        chk = false;


        
    if (chk) {
        var obj = new useracc(username, email, password, num, type, null);
        user.push(obj);
        window.localStorage.inx++;
        window.localStorage.user = JSON.stringify(user);
        window.location.href="Login.html";
    }
    else {
        alert("Can not sign up, try again!");
        window.location.reload();
    }
}