/// BUSINESS LOGIC ///

// Primary Beep Boop Function
function beepyBooper(inputNumber, userName) {
  var beepBoopFeedIn = generateNumbers(inputNumber);
  var beepBoopFeedOut = [];

  // Beep Boop Engine
  beepBoopFeedIn.map(function(numberString) {
    var parsedNumber = numberParser(numberString);

    if (parseInt(numberString) % 3 === 0 && parseInt(numberString) !== 0) {
      if (userName !== "") {
        beepBoopFeedOut.push("I'm sorry, " + userName + ". I'm afraid I can't do that.");
      } else {
        beepBoopFeedOut.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }
    } else if (parsedNumber.includes("1")) {
      beepBoopFeedOut.push("Boop!");
    } else if (parsedNumber.includes("0")) {
      beepBoopFeedOut.push("BEEP!");
    } else {
      beepBoopFeedOut.push(numberString);
    }
  });

  return beepBoopFeedOut;
};

// Generate Range of Numbers as Strings Array
function generateNumbers(inputNumber) {
  var rangeOfNumbers = [];
  for (var i = 0;i <= parseInt(inputNumber); i ++) {
    rangeOfNumbers.push(i.toString());
  };
  return rangeOfNumbers;
};

// Turn Number String Into Array of Digits
function numberParser(inputNumber) {
  var parsedNumber = inputNumber.split("");
  return parsedNumber;
};

/// USER INTERFACE LOGIC ///
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#input-number").val();
    var userName = $("#input-name").val();
    var userResult = beepyBooper(userInput, userName);

    // Push Results Forward or in Reverse
    function resultFeeder(direction) {
      $("#result").empty();
      if (direction == "forward") {
        userResult.forEach(function(number) {
          $("#result").append('<div class="beep-boops">' + number + '</div>');
        });
      } else if (direction == "reverse") {
        userResult.forEach(function(number) {
          $("#result").prepend('<div class="beep-boops">' + number + '</div>');
        });
      } else {
        console.log("resultFeeder direction must be forward or reverse.");
      }
      $(".beep-boops").fadeIn();
    };

    resultFeeder("forward");

    // Post-Result Reverse Feed
    $("#reverse").click(function() {
      resultFeeder("reverse");
      $("#forward").show();
    });

    // Post-Result Forward Feed
    $("#forward").click(function() {
      resultFeeder("forward");
    });

    $("#result").show();
    $("#reverse").show();
    $("#forward").hide();
  });
});
