function Test() {
    try {
        alert("Merhaba Try Catch");
    } catch(e) {
        document.getElementById("hid").innerHTML = e;
    }
}