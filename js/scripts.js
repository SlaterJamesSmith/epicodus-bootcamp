function binaryToDecimal(binaryNumber) {
  var binaryNumberArray = binaryNumber.split("").reverse();
  var total = 0;
  for (i = binaryNumber.length - 1; i >= 0; i -= 1) {
    if (binaryNumberArray[i] === "1") {
      total += Math.pow(2, i);
    }
  }

  return total;
};


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = binaryToDecimal(userInput);
    $("#result .binaryInput").text(userInput);
    $("#result .decimalOutput").text(result);
    $("#result").show();

  });

});
