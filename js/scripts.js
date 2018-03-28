// BUSINESS
var userInputArray = [];
var userInput;
var vowels = ["a", "e", "i", "o", "u"];

function validateInput(string) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  userInputArray = string.split("");
  var lettersOnly = true;

  userInputArray.forEach(function(letter) {
    if (alphabet.includes(letter.toLowerCase())) {
      return;
    } else {
      lettersOnly = false;
    }
  });
  console.log(lettersOnly);
  return lettersOnly;

};

function pigLatin(string) {
  // Vowels Branch
  if (vowels.includes(userInputArray[0].toLowerCase())) {
    return userInput + "way";
  // Consonants Branch
} else if (!vowels.includes(userInputArray[0].toLowerCase())) {
    while (!vowels.includes(userInputArray[0].toLowerCase())) {
      userInputArray.push(userInputArray[0]);
      userInputArray.shift();
    };
    if (userInputArray[userInputArray.length - 1] === "q" && userInputArray[0] === "u") {
      userInputArray.push(userInputArray[0]);
      userInputArray.shift();
    }
    return userInputArray.join("") + "ay";
  }
};

// USER INTERFACE
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#input").val();
    var inputValidation = validateInput(userInput);
    if (inputValidation === true) {
      var result = pigLatin(userInput);
    }
    $("#result p").text(result);
    $("#result").show();
  });
});
