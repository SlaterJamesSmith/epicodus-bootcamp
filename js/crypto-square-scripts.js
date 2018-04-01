var preEncodeTable = [];
var squareCounter = 2;

function cryptoSquare(input) {
  var input = input.toLowerCase().replace(/\s/g,"")
  preEncodeTable = input.split("").slice();
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
  var arraySwitcher = 0;
  for(var strLength = 0; strLength < input.length; strLength ++) {
    square[arraySwitcher].push(input[strLength]);
    if (arraySwitcher === squareSize - 1){
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
    $("#crypto-square").empty();
    buildCryptoSquare();
    $("#crypto-square").show();
    $("#result").show();
  });

  function buildCryptoSquare() {
    var arraySwitcher = 0;
    for (var i = 0; i < squareCounter; i ++) {
      var colName = i+1;
      $("#crypto-square").append('<div id="col' + colName + '" class="left"></div>');
    };
    for (var i = 0; i < preEncodeTable.length; i ++) {
      var colName = arraySwitcher + 1;
      var columnID = "#col" + colName;
      console.log("arraySwitcher");
      $(columnID).append('<div class="crypto-letter">' + preEncodeTable[i] + '</div>');
      if (arraySwitcher === squareCounter - 1){
        arraySwitcher = 0;
      }
      else {
        arraySwitcher += 1;
      }
    };
  };
});
