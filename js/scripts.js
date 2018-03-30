// BUSINESS LOGIC
function beepyBooper(inputNumber) {
  if (inputNumber === 0) {
    return "Beep!";
  } else if (inputNumber === 1) {
    return "Boop!";
  } else if (inputNumber % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    return false;
  }
};


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#result").empty();
    var userInput = parseInt($("#input").val());
    var userResult = beepyBooper(userInput);
    $("#result").text(userResult);
    $("#result").show();

  });

});
