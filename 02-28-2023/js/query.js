function QueryTest() {
    var d = document.querySelectorAll("h3.xx");
    d[1].style.color = "blue";
    d[2].style.fontSize = "100px";
    d[0].innerHTML = "Test is successful!";
}