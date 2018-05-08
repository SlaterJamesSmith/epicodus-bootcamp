// Business Logic
function calculate(number1, number2, operator) {
  switch (operator) {
    case "add":
      return add(number1, number2);
    case "subtract":
      return subtract(number1, number2);
    case "multiply":
      return multiply(number1, number2);
    case "divide":
      return divide(number1, number2);
  };
};

function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number1 = parseFloat($("#input1").val());
    var number2 = parseFloat($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = calculate(number1, number2, operator);
    console.log(operator, result);
    $("#result").text(result);
  });
});
