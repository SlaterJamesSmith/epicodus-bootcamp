// BUSINESS


// USER INTERFACE
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = pigLatin(userInput);
    $("#result p").text(result);
    $("#result").show();
  });
});
