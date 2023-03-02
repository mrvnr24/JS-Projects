var x1 = "Hello!";
var x2 = 24;
var x3 = false;
var x4 = [];
var x5 = function MyFunction() {};
var x6 = {};

document.getElementById("type").innerHTML = 
                    typeof x1 + "<br/>" +
                    typeof x2 + "<br/>" +
                    typeof x3 + "<br/>" +
                    typeof x4 + "<br/>" +
                    typeof x5 + "<br/>" +
                    typeof x6;