var numberArray = [];
var inputNumber;
var primeArray = [];

function generateNumbers(number) {
  for (var i = number; i >= 2; i -= 1) {
    numberArray.push(i);
  };
  numberArray.reverse();
};

function removeNonPrimes(number) {
  for (var i = 2; i <= number; i += 1 ) {
    // console.log("Checking " + i);
    // debugger;
    var arrayIndex = 0;
    numberArray.forEach(function(element) {
      // debugger;
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

function primeSifter() {
  inputNumber = parseInt(prompt("Enter a number"));
  generateNumbers(inputNumber);
  removeNonPrimes(inputNumber);
  console.log("PrimeSifter END");
  console.log(primeArray);
}

primeSifter();
