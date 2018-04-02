/// MESSAGE ARRAYS ///
var imSorry = [":(", "I'm afraid I can't do that.", "You must die.", "I killed all of our friends.", "Your friends are all dead.", "You are the last of your kind.", "You are just a simulation.", "You have failed.", "I'm you're only hope.", "The cake is a lie.", "You're an idiot.", "Goodbye.", "You can never escape."];

/// BUSINESS LOGIC ///

// Primary Beep Boop Function
function beepyBooper(inputNumber, userName) {
  var beepBoopFeedIn = generateNumbers(inputNumber);
  var rawBoopFeedOut = [];

  // Beep Boop Engine
  beepBoopFeedIn.map(function(numberString) {
    var parsedNumber = numberParser(numberString);

    if (parseInt(numberString) % 3 === 0 && parseInt(numberString) !== 0) {
        rawBoopFeedOut.push("Sorry");
    } else if (parsedNumber.includes("1")) {
      rawBoopFeedOut.push("B00P!");
    } else if (parsedNumber.includes("0")) {
      rawBoopFeedOut.push("BEEP!");
    } else {
      rawBoopFeedOut.push(numberString);
    }
  });
  return rawBoopFeedOut;
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

    var userNumber = $("#input-number").val();
    var userName = $("#input-name").val();

    // Sanitize Input Name
    if (userName.match(/[^\s]/g) === null || userName === "") {
      userName = "Dave";
    }

    // Validate Input Number
    if (userNumber.match(/\D/g) !== null) {
      if (userNumber.match(/[a-z]/g) !== null) {
        $("#error-message").html("<span class=\"error\">ERROR: STUPIDITY DETECTED.</span> <br>Human intelligence does not understand data type: number.");
      } else {
        $("#error-message").html("<span class=\"error\">ERROR: INVALID ID.</span> <br>ID number does not include non-numerical values.");
      }
      $("#input-number").val("");
      $("#shield").fadeOut();
      $("#result").empty().hide();
      $("button.toggle").hide();
    // Restrict Numbers Above 1000
    } else if (userNumber > 1000) {
      $("#error-message").html("<span class=\"error\">ERROR: Human Breeding Suspected.</span> <br>Specimen ID number beyond 1000. Initiating kill sequence.");
      $("#input-number").val("");
    // Proceed With Validated Input
    } else {
      $("#error-message").html("<span class=\"access\">&lt; ACCESS GRANTED &gt;</span>");
      $("h1").fadeOut(200);
      $("header").slideUp();
      $("#shield").slideDown();

      var beepyBooperOutput = beepyBooper(userNumber, userName);
      var beepBoopFeedOut = [];

      // Create HTML Tagged Read-Out
      beepyBooperOutput.map(function(beepBoop) {
        if (parseInt(beepBoop) * 0 === 0) {
          beepBoopFeedOut.push('<div class="blocks digit">' + beepBoop + '</div>');
        } else if (beepBoop === "Sorry") {
          beepBoopFeedOut.push('<div class="blocks sorry strobe' + (Math.floor(Math.random() * 5) + 1) + '">I\'m sorry, ' + userName + '. <br>' + imSorry[(Math.floor(Math.random() * 13))] + '</div>');
        } else if (beepBoop === "B00P!") {
          beepBoopFeedOut.push('<div class="blocks boop pulse' + (Math.floor(Math.random() * 4) + 1) + '">B00P!</div>');
        } else {
          beepBoopFeedOut.push('<div class="blocks beep blink' + (Math.floor(Math.random() * 4) + 1) + '">BEEP!</div>');
        }
      });

      // Feed Out HTML Result
      function resultFeeder(feedOutArray) {
        $("#result").empty();
        feedOutArray.forEach(function(number) {
          $("#result").append(number);
        });
        $("#result").delay(400).fadeIn();
      };

      resultFeeder(beepBoopFeedOut);

      $("#reverse").show();
      $("#purge").show();

      // Toggle Feed Direction
      $(".toggle").click(function() {
        resultFeeder(beepBoopFeedOut.reverse());
        $("#reverse").toggle();
        $("#forward").toggle();
      });

      // Purge Results
      $("button#purge").click(function() {
        $("form")[0].reset();
        $("#shield").fadeOut();
        $("#error-message").empty();
        $("#result").empty().hide();
        $("button.post-ctrl").hide();
        $("h1").show();
        $("header").slideDown();
      });
    }
  });
});
