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
        beepBoopFeedOut.push('<div class="blocks sorry blink">I\'m sorry, ' + userName + '. I\'m afraid I can\'t do that.</div>');
      } else {
        beepBoopFeedOut.push('<div class="blocks sorry blink">I\'m sorry, Dave. I\'m afraid I can\'t do that.</div>');
      }
    } else if (parsedNumber.includes("1")) {
      beepBoopFeedOut.push('<div class="blocks boop">Boop!</div>');
    } else if (parsedNumber.includes("0")) {
      beepBoopFeedOut.push('<div class="blocks beep">BEEP!</div>');
    } else {
      beepBoopFeedOut.push('<div class="blocks digit">' + numberString + '</div>');
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
    var beepBoopFeedOut = beepyBooper(userInput, userName);
    $("form")[0].reset();

    // Feed Out Result
    function resultFeeder(feedOutArray) {
      $("#result").empty();
      feedOutArray.forEach(function(number) {
        $("#result").append(number);
      $(".beep-boops").fadeIn();
      });
    };

    resultFeeder(beepBoopFeedOut);

    $("#result").show();
    $("button.post-ctrl").show();
    $("button#forward").hide();

    // Post-Result Reverse Feed
    $("#reverse").click(function() {
      resultFeeder(beepBoopFeedOut.reverse());
      $("#forward").show();
    });

    // Post-Result Forward Feed
    $("#forward").click(function() {
      resultFeeder(beepBoopFeedOut);
    });

    // Post-Result Purge
    $("button#purge").click(function() {
      $("#result").empty();
      $("button.post-ctrl").hide();
      $("#input-number").addClass("blink");
      $("#input-number").attr("placeholder", "_");
      $("#input-name").attr("placeholder", "Current > Dave");
    });
  });

  // Turn Off Placeholder
  $("input").click(function() {
    $(this).attr("placeholder", "");
    $(this).removeClass("blink");
  });
});
