function cryptoSquare(input) {
  var input = input.toLowerCase().replace(/\s/g,"")
  var squareCounter = 2;

  while (Math.sqrt(input.length) > squareCounter) {
    squareCounter += 1;
  };

  return makeSquare(input,squareCounter);

};

function makeSquare(input,squareSize) {
  var square = [];
  var encodeArray = [];
  for (var colCounter = 0; colCounter < squareSize; colCounter ++){
    square.push([]);
  }
  console.log(square);
  var arraySwitcher = 0;
  for(var strLength = 0; strLength < input.length; strLength ++) {
    square[arraySwitcher].push(input[strLength]);
    if (arraySwitcher  == squareSize - 1){
      arraySwitcher = 0;
    }
    else {
      arraySwitcher += 1;
    }
  }

  var preEncodeArray = square.join("").replace(/,/g,"").split("");

  while (preEncodeArray.length > 0) {
    for (var i = 0; i < 5; i ++) {
    encodeArray.push(preEncodeArray.shift());
    }
    encodeArray.push(" ");
  }

  return encodeArray.join("");

};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = cryptoSquare(input);
    $("#result p").text(result);
  });

});
