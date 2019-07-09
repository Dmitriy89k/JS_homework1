var firstNum = prompt("Enter first number:");
firstNum = parseInt(firstNum);
var secondNum = prompt("Second first number:");
secondNum = parseInt(secondNum);
var operand = prompt("Enter math operation:");


if (isNaN(firstNum)) {
  alert("Wrong input!!!First number must be numeric");
} else if (isNaN(secondNum)) {
  alert("Wrong input!!!Second number must be numeric");
} else if (operand == "+") {
  var sum = firstNum + secondNum;
  alert("Your result = " + sum);
} else if (operand == "-") {
  var minus = firstNum - secondNum;
  alert("Your result = " + minus);
} else if (operand == "*") {
  var mul = firstNum * secondNum;
  alert("Your result = " + mul);
} else if (operand == "/") {
  var div = firstNum / secondNum;
  alert("Your result = " + div);
} else {
  alert("Wrong input operation");
}
