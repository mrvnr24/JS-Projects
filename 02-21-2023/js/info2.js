function DemoCheck() {
    var x = document.getElementById("demo").value;
    switch(x) {
        case "1" :
            document.getElementById("h1").innerHTML = "Monday";
        break;

        case "2" :
            document.getElementById("h1").innerHTML = "Tuesday";
        break;

        case "3" :
            document.getElementById("h1").innerHTML = "Wednesday";
        break;

        case "4" :
            document.getElementById("h1").innerHTML = "Thursday";
        break;

        case "5" :
            document.getElementById("h1").innerHTML = "Friday";
        break;

        case "6" :
            document.getElementById("h1").innerHTML = "Saturday";
        break;

        case "7" :
            document.getElementById("h1").innerHTML = "Sunday";
        break;
    }
}