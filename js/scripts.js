$(document).ready(function() {
  $(".activate").click(function() {
    userMessage = prompt("Enter a message for the cipher:");
    messageCheck();
  });

  $(".monitor").click(function() {
    alert(userMessage);
  });
});

var userMessage = "Error: No Message Input."

function messageCheck() {
  if (userMessage === null || userMessage === "" || userMessage === undefined) {
    userMessage = "Error: No Message Input.";
    alert(userMessage);
  } else {
    alert("Message Sent.");
  };
};
//
// function capitalizeEnds(string) {
//   capsString = userString.replace(/^./, userString.charAt(0).toUpperCase()).replace(/.$/, userString.charAt(userString.length - 1).toUpperCase());
// };
//
// capitalizeEnds(userString);
//
// var capsFirst = capsString.charAt(0);
// var capsLast = capsString.charAt(capsString.length - 1);
//
// var thirdString = userString + capsLast + capsFirst
// var fourthString;
//
// function scramble(string) {
//   var charOffset = userString.charAt(userString.length / 2);
//   fourthString = charOffset + thirdString;
// };
//
// scramble(userString);
//
// function reverseString(string) {
//   alert("Your garbled message is: " + string.split("").reverse().join(""));
// };
// reverseString(fourthString);
