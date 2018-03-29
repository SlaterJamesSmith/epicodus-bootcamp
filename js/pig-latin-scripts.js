// BUSINESS
var userInput;
var userInputWordArray = [];
var pigLatinized = [];
var vowels = ["a", "e", "i", "o", "u"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function pigLatin(string) {

  userInputWordArray = string.split(" ");

  // LOOP THROUGH WORDS
  pigLatinized = userInputWordArray.map(function(word) {
    var userInputArray = word.split("");
    var lettersOnly = true;

    // LETTER VALIDATION LOOP
    userInputArray.forEach(function(letter) {
      if (!alphabet.includes(letter.toLowerCase())) {
        lettersOnly = false;
      }
    });

    // TRANSLATE WORD
    if (lettersOnly === true) {
      if (vowels.includes(userInputArray[0].toLowerCase())) {
        return vowelTranslate(word);
      } else {
        return consonantTranslate(word);
      }
    } else {
      return word;
    }

  });
};

function vowelTranslate(word) {
  return word + "way";
};

function consonantTranslate(word) {
  var userInputArray = word.split("");

  userInputArray.push(userInputArray[0]);
  userInputArray.shift();

  while (!vowels.includes(userInputArray[0].toLowerCase()) && userInputArray[0].toLowerCase() !== "y") {
    userInputArray.push(userInputArray[0]);
    userInputArray.shift();
  };

  if (userInputArray[userInputArray.length - 1] === "q" && userInputArray[0] === "u") {
    userInputArray.push(userInputArray[0]);
    userInputArray.shift();
  }

  return userInputArray.join("") + "ay";
};

// USER INTERFACE
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#input").val();
    pigLatin(userInput);
    $("#result p").text(pigLatinized.join(" "));
    $("#result").show();
  });
});
