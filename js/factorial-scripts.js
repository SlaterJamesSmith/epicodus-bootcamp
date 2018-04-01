var calcValue = 1;
var factorialArray = [];

function findFactors(number) {
  for (var i = number; i > 0; i -= 1) {
    factorialArray.push(i);
  };
};

function calculateFactorial(array) {
  array.forEach(function(factor) {
    calcValue *= factor;
  });
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    findFactors(parseFloat($("#input").val()));
    calculateFactorial(factorialArray);

    $("#result h2").text(calcValue);
    $("#result").show();

    calcValue = 1;
    factorialArray = [];

  });

});
