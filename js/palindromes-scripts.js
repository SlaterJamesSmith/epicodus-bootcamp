$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputStringArray = $("#input").val().split("");
    var reversedStringArray = inputStringArray.slice().reverse();

    if (reversedStringArray.join() === inputStringArray.join()) {
      $("#result h2").text("It's a palindrome!");
    } else {
      $("#result h2").text("It's NOT a palindrome!");
    }

    $("#result").show();

  });

});
