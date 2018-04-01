var countOutputs = [];

function countUp(number1, number2) {
  countOutputs.push(number1);
  for (currentCount = number1; currentCount + number1 < number2 ; currentCount) {
    currentCount += number1;
    countOutputs.push(currentCount);
  };
};

function countDown(number1, number2) {
  countOutputs.push(number1);
  for (currentCount = number1; currentCount + number1 > number2 ; currentCount) {
    currentCount += number1;
    countOutputs.push(currentCount);
  };
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    countOutputs = [];

    $("li").remove();

    var inputNum1 = parseFloat($("#inputNum1").val());
    var inputNum2 = parseFloat($("#inputNum2").val());

    if (isNaN(inputNum1) || isNaN(inputNum2)) {
      alert("Please enter numbers only.");
    } else {
      if (inputNum1 > 0 && inputNum1 > inputNum2) {
        alert('\"Count By\" must be less than count to!');
      } else if (inputNum1 < 0 && inputNum2 > inputNum1) {
        alert("Can't count up with a negative number!");
      } else if (inputNum1 < 0 && inputNum2 < inputNum1) {
        countDown(inputNum1, inputNum2);
        countOutputs.forEach(function(output) {
          $("#results ul").append("<li>" + output + "</li>");
        });
      } else {
        countUp(inputNum1, inputNum2);
        countOutputs.forEach(function(output) {
          $("#results ul").append("<li>" + output + "</li>");
        });
      }
    }

  });
});
