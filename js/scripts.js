// Business Logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

// User Interface Logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("input#add1").val());
    var number2 = parseInt($("input#add2").val());
    var result = add(number1, number2);

    $("#addresult").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("input#subtract1").val());
    var number2 = parseInt($("input#subtract2").val());
    var result = subtract(number1, number2);

    $("#subtractresult").text(result);
  });

});
