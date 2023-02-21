var t = Math.floor((Math.random()*100)+1);
var count = 0;
function Kontrol() {
    var i = document.getElementById("in1").value;
    if(i>t) {
        count++;
        document.getElementById("ss").innerHTML = count;
        document.getElementById("pp").innerHTML = "Tahmin sayinizi kucultun";
    } else if (i<t) {
        count++;
        document.getElementById("ss").innerHTML = count;
        document.getElementById("pp").innerHTML = "Tahmin sayinizi buyutun" ;
    } else if (i==t) {
        count ++;
        document.getElementById("ss").innerHTML = count;
        document.getElementById("pp").innerHTML = "Tebrikler";

    }
}