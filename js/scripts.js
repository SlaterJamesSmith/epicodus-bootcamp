// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#input-name").text($("#firstname").val().slice(0,1).toUpperCase() + $("#firstname").val().slice(1,$("#firstname").val().length).toLowerCase());

    // if () {
    //
    // } else if () {
    //
    // } else if () {
    //
    // } else if () {
    //
    // } else {
    //
    // };

    $("form").hide();
    $("#thankyou").show();

  });

  $("#retake-survey").click(function() {
    $("form").show();
    $(".no-display").hide();

  });
});
