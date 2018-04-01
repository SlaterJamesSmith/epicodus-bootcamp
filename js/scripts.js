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
        beepBoopFeedOut.push(userName);
      } else {
        beepBoopFeedOut.push("Dave");
      }
    } else if (parsedNumber.includes("1")) {
      beepBoopFeedOut.push("B00P!");
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
    $("h1").fadeOut(200);
    $("header").slideUp();
    $("#shield").slideDown();

    var userInput = $("#input-number").val();
    var userName = $("#input-name").val();
    var rawBeepBoop = beepyBooper(userInput, userName);
    var beepBoopFeedOut = [];
    $("form")[0].reset();

    // Create HTML Tagged Read-Out
    rawBeepBoop.map(function(beepBoop) {
      if (beepBoop === "B00P!") {
        beepBoopFeedOut.push('<div class="blocks boop">B00P!</div>');
      } else if (beepBoop === "BEEP!") {
        beepBoopFeedOut.push('<div class="blocks beep blink' + (Math.floor(Math.random() * 4) + 1) + '">BEEP!</div>');
      } else if (parseInt(beepBoop) / parseInt(beepBoop) === 1) {
        beepBoopFeedOut.push('<div class="blocks digit">' + beepBoop + '</div>');
      } else {
        if (beepBoop === "Dave") {
          beepBoopFeedOut.push('<div class="blocks sorry">I\'m sorry, Dave. <br>I\'m afraid I can\'t do that.</div>');
        } else {
          beepBoopFeedOut.push('<div class="blocks sorry">I\'m sorry, ' + beepBoop + '. <br>I\'m afraid I can\'t do that.</div>');
        }
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
      $("#shield").fadeOut();
      $("#result").empty().hide();
      $("button.post-ctrl").hide();
      $("h1").show();
      $("header").slideDown();
    });
  });
});
