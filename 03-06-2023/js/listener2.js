var x = document.getElementById("divid");
x.addEventListener("mousemove", Random);
x.addEventListener("click", CloseRandom);

function Random() {
    document.getElementById("pid").innerHTML = (Math.random())*100;
}

function CloseRandom() {
    x.removeEventListener("mousemove", Random);
}