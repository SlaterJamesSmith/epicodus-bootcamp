var countOutputs = [];
var currentCount;

function countUp(number1, number2) {
  for (currentCount = 0; currentCount < number2 ; currentCount) {
    currentCount += number1;
    countOutputs.push(currentCount);
  };
};

$(document).ready(function (){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputNum1 = parseFloat($("#inputNum1").val());
    var inputNum2 = parseFloat($("#inputNum2").val());

    if (isNaN(inputNum1) || isNaN(inputNum2)) {
      alert("Please enter numbers only.");
    } else {
      countUp(inputNum1, inputNum2);
      countOutputs.forEach(function(output) {
        $("#results #outputs ul").append("<li>" + output + "</li>");
      });
    }

    countOutputs = [];

  });
});
