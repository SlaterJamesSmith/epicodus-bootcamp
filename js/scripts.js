var number1 = 0;
var number2 = 0;
var operatorSelection;

function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

$(document).ready(function() {
  $("#key1").click(function() {
    number1 = 1
    if ($("#display").html() === "0") {
      $("#display").text("1");} else {
        $("#display").append("1");
      };
  });


});
