// BUSINESS LOGIC
function beepyBooper(inputNumber) {
  if (inputNumber === 0) {
    return "Beep!";
  } else {
    return false;
  };
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
