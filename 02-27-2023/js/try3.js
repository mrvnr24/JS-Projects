function Val() {
    let x = document.getElementById("in1").value;
    let y = document.getElementById("pid");
    y.innerHTML = "";
    y.style.color = "red";
    try {
        if(x=="") throw "Input cannot be empty!";
        if(x<5) throw "Input cannot be less than five!";
        if(x>10) throw "Input cannot be greater than ten!";
        if(isNaN(x)) throw "You must enter a number!";
        if(x>=5 && x<=10) {
            y.innerHTML = "You have provided the correct input!";
            y.style.color = "blue";
        }
    } catch(e) {
        y.innerHTML = e;
    }
}