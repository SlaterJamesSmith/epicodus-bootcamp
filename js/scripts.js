var number1 = "0";
var number2 = "0";
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
  $("#clear-all").click(function() {
    number1 = "0";
    number2 = "0";
    operatorSelection = "none";
    $("#display").text("0");
  });

  $("#key1").click(function() {
    if ($("#display").html() === "0") {
      $("#display").text("1");
    } else {
        $("#display").append("1");
      };
  });

  $("#key2").click(function() {
    number1 = "2"
    if ($("#display").html() === "0") {
      $("#display").text("1");} else {
        $("#display").append("1");
      };
  });


});
