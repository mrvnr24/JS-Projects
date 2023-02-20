function LoginCheck() {
    var x = document.getElementById("mail").value;
    var y = document.getElementById("password").value;

    if(x == "info@gmail.com" && y == "12345") {
        document.getElementById("demo").innerHTML = "Logged in successfully!";
    } else {
        alert("Check your e-mail or password!");
    }
}