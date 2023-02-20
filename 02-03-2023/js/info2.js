function Topla() {
    var x = parseInt(document.getElementById("in1").value);
    var y = parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML = x + y;  // or instead of parseInt Number(x) + Number(y)
}

function Cikarma() {
    var a = parseInt(document.getElementById("in1").value);
    var b = parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML = a - b;
}

function Carpma() {
    var c = parseInt(document.getElementById("in1").value);
    var d = parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML = c * d;
}

function Bolme() {
    var e = parseInt(document.getElementById("in1").value);
    var f = parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML = e / f;
}