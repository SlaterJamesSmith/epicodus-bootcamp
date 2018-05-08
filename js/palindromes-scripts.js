$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputStringArray = $("#input").val().split("");
    var reversedStringArray = inputStringArray.slice().reverse();

    if (reversedStringArray.join() === inputStringArray.join()) {
      $("#result").text("It's a palindrome!");
    } else {
      $("#result").text("It's NOT a palindrome!");
    }

    $("#result").show();
  });
});
