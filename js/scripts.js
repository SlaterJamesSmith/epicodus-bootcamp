// BUSINESS LOGIC



// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#result").empty();
    var beepBoopInput = parseInt($("#input").val());
    var beepBoopResult = beepBoopInput;
    $("#result").text(beepBoopResult);
    $("#result").show();

  });

});
