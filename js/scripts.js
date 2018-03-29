var converter = function(input) {
  var romanNumeral = "";
  if (input < 4) {
    for(var index = 0; index < input; index++){
      romanNumeral += "I";
    }
  } else if (input === 4) {
    romanNumeral += "IV";
  } else if (input === 5) {
    romanNumeral += "V";
  } else if (input < 9) {
    romanNumeral += "V";
    for(var index = 0; index < input - 5; index++){
      romanNumeral += "I";
    }
  } else if (input === 9) {
    romanNumeral += "IX";
  } else if (input === 10) {
    romanNumeral += "X";
  } else {
      return false;
  }
  return romanNumeral;
};






$(document).ready(function() {
  $("#number-form").submit(function(event) {
    var input = parseInt($("#input").val());
    $("#result p").text(converter(input));
    event.preventDefault();
  });
});
