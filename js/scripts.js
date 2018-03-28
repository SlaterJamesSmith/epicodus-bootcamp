// BUSINESS
var userInputArray = [];
var userInput;
var vowels = ["a", "e", "i", "o", "u"];

function validateInput(string) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  userInputArray = string.split("");
  var lettersOnly = true;

  userInputArray.forEach(function(letter) {
    if (alphabet.includes(letter)) {
      return;
    } else {
      lettersOnly = false;
    }
  });

  return lettersOnly;

};

function translateVowels(string) {
  if (vowels.includes(userInputArray[0])) {
    return userInput + "way";
  }
}

function translateConsonant(string) {
  if (!vowels.includes(userInputArray[0])) {
    userInputArray.push(userInputArray[0]);
    userInputArray.shift();
    return userInputArray.join("") + "ay";
  }
}


// USER INTERFACE
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#input").val();
    var inputValidation = validateInput(userInput);
    if (inputValidation === true) {
      var result = translateConsonant(userInput);
    }
    $("#result p").text(result);
    $("#result").show();
  });
});
