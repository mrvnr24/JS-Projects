var x = Math.floor(Math.random()*10);
var t = prompt("Please guess a number");

while(parseInt(t) != x) {
    t = prompt("While - Please guess a number");
}

alert("Congrats! The number is " + x);