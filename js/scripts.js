// BUSINESS LOGIC

// Primary Beep Boop Function
function beepyBooper(inputNumber) {
  var beepBoopInput = numberParser(inputNumber);

  if (parseInt(inputNumber) % 3 === 0 && parseInt(inputNumber) !== 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (beepBoopInput.includes("1")) {
    return "Boop!";
  } else if (beepBoopInput.includes("0")) {
    return "Beep!";
  } else {
    return inputNumber;
  }
};

// Turn Number Into Array of Digits
function numberParser(inputNumber) {
  var parsedNumber = inputNumber.split("");
  return parsedNumber;
};

// Generate Range of Numbers Array
function generateNumbers(inputNumber) {
  var rangeOfNumbers = [];
  for (var i = 0;i <= parseInt(inputNumber); i ++) {
    rangeOfNumbers.push(i);
  };
  return rangeOfNumbers;
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#result").empty();
    var userInput = $("#input").val();
    var userResult = beepyBooper(userInput);
    $("#result").text(userResult);
    $("#result").show();

  });

});
