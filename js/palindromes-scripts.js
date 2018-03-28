$(document).ready(function() {
  var inputStringArray = prompt("Enter a number/word/phrase").split("");
  var reversedStringArray = inputStringArray.slice().reverse();
  
  if (reversedStringArray.join() === inputStringArray.join()) {
    alert("It's a palindrome!");
  } else {
    alert("It's NOT a palindrome!");
  }
});
