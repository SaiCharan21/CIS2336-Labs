
function eo() {
  const num1 = document.getElementById("fnum").value;
  if(num1 % 2 === 0){
    document.getElementById("result").innerHTML = "Even Number found!";
  }
  else {
    document.getElementById("result").innerHTML = "Odd Number found!";
  }
}