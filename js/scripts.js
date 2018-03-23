// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("form").hide();
    $("#thankyou").show();

  });

  $("#retake-survey").click(function() {
    $("form").show();
    $(".hide").hide();
    $("#thankyou").hide();

  });
});
