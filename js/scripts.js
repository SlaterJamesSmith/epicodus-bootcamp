function cryptoSquare(input) {
  if (input.length < 5) {
    return makeSquare(input);
  } else {
    return input;
  }

};

function makeSquare(input) {
  var square = [[],[]];
  var arraySwitcher = 0;
  for(var strLength = 0; strLength < input.length; strLength ++) {
    square[arraySwitcher].push(input[strLength]);
    if (arraySwitcher === 0){
      arraySwitcher = 1;
    }
    else {
      arraySwitcher = 0;
    }
  }
  return square.join("").replace(/,/g,"");

};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = cryptoSquare(input);
    $("#result p").text(result);
  });

});
