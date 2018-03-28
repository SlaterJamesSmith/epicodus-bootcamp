var numberArray = [];
var primeArray = [];

function generateNumbers(number) {
  for (var i = number; i >= 2; i -= 1) {
    numberArray.push(i);
  };
  numberArray.reverse();
};

function removeNonPrimes(number) {
  for (var i = 2; i <= number; i += 1 ) {
    var arrayIndex = 0;
    numberArray.forEach(function(element) {
      if (element > i && element % i === 0) {
        numberArray[arrayIndex] = 0;
      }
      arrayIndex += 1;
    });
  };

  numberArray.forEach(function(element) {
    if (element !== 0) {
      primeArray.push(element);
    }
  });

};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#primeResult ul li").remove();
    var inputNumber = parseInt($("#input").val());

    generateNumbers(inputNumber);
    removeNonPrimes(inputNumber);

    primeArray.forEach(function(element) {
      $("#primeResult ul").append("<li>" + element + "</li>");
    });

    $("#primeResult").show();
    numberArray = [];
    primeArray = [];

  });

});
