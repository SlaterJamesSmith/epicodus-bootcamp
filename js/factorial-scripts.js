var calcValue = 1;
var factorialArray = [];


function findFactors(number) {
  for (var i = number; i > 0; i -= 1) {
    factorialArray.push(i);
    console.log(i);
  };
  return factorialArray;
};

function calculateFactorial(array) {
  array.forEach(function(factor) {
    calcValue *= factor;
  });
  console.log(calcValue);
};


// factorial(5);
