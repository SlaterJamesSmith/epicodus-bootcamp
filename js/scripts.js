$(document).ready(function() {
  $(".img1").click(function() {
    alert(userString);
  });

  $(".img2").click(function() {
    reverseString(fourthString);
  });
});


var userString = prompt("Please enter a complete sentence.");
var capsString;
alert("You entered: \"" + userString + "\"");

function capitalizeEnds(string) {
  capsString = userString.replace(/^./, userString.charAt(0).toUpperCase()).replace(/.$/, userString.charAt(userString.length - 1).toUpperCase());
};

capitalizeEnds(userString);

var capsFirst = capsString.charAt(0);
var capsLast = capsString.charAt(capsString.length - 1);

var thirdString = userString + capsLast + capsFirst
var fourthString;

function scramble(string) {
  var charOffset = userString.charAt(userString.length / 2);
  fourthString = charOffset + thirdString;
};

scramble(userString);

function reverseString(string) {
  alert("Your garbled message is: " + string.split("").reverse().join(""));
};
reverseString(fourthString);


//var newString = userString.replace(/^./, userString.charAt(userString.length - 1).toUpperCase()).replace(/.$/, userString.charAt(0).toUpperCase());
