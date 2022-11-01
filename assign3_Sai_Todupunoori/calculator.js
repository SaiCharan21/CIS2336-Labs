function clearView() {
    document.getElementById("numbers").value = "";
}
function show(value) {
    document.getElementById("numbers").value += value;
}
function math() {
    const x= document.getElementById("numbers").value;
    document.getElementById("numbers").value = eval(x);
}

function sinClicked(){
    const x= document.getElementById("numbers").value;
    document.getElementById("numbers").value = ((Math.sin(x)*180)/(Math.PI));
}

function coslicked(){
    const x= document.getElementById("numbers").value;
    document.getElementById("numbers").value = ((Math.cos(x)*180)/(Math.PI));
}

function tanlicked(){
    const x= document.getElementById("numbers").value;
    document.getElementById("numbers").value = ((Math.tan(x)*180)/(Math.PI));
}