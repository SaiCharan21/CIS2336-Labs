function mul() {
  var num1 = document.getElementById("fnum").value;
  var num2 = document.getElementById("snum").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function addi() {
  var num1 = document.getElementById("fnum").value;
  var num2 = document.getElementById("snum").value;
  document.getElementById("result").innerHTML = +num1 + +num2;
}

function sub() {
  var num1 = document.getElementById("fnum").value;
  var num2 = document.getElementById("snum").value;
  document.getElementById("result").innerHTML = num1 - num2;
}

function divi() {
  var num1 = document.getElementById("fnum").value;
  var num2 = document.getElementById("snum").value;
  document.getElementById("result").innerHTML = num1 / num2;
}
