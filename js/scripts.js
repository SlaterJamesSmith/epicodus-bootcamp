var converter = function(input) {
  var inputArray = input.split("").reverse();
  var outputArray = [];
  for(var index = 0; index < inputArray.length; index ++){
    outputArray.push(translate(inputArray[index], index));
  }
  return outputArray.reverse().join("");
};

var translate = function (input, index) {
  var ones;
  var fives;
  var tens;
  switch (index) {
    case 0:
      ones = "I";
      fives = "V";
      tens = "X";
      break;
    case 1:
      ones = "X";
      fives = "L";
      tens = "C";
      break;
    case 2:
      ones = "C";
      fives = "D";
      tens = "M";
      break;
    case 3:
      ones = "M";
      break;
  }
  input = parseInt(input);
  var romanNumeral = "";
  if (input < 4) {
    for(var index = 0; index < input; index++){
      romanNumeral += ones;
    }
  } else if (input === 4) {
    romanNumeral = ones + fives;
  } else if (input === 5) {
    romanNumeral = fives;
  } else if (input < 9) {
    romanNumeral = fives;
    for(var index = 0; index < input - 5; index++){
      romanNumeral += ones;
    }
  } else if (input === 9) {
    romanNumeral = ones + tens;
  } else {
      return false;
  }
  return romanNumeral;
};


//interface logic
$(document).ready(function() {
  $("#number-form").submit(function(event) {
    var input = $("#input").val();
    $("#result p").text(converter(input));
    event.preventDefault();
  });
});
