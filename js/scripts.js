// BUSINESS LOGIC
function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#clear-all").click(function() {
    $("#display-number1").text("0");
    $("#display-operator").text("");
    $("#display-number2").text("");
    $("#display-result").text("");
  });

  $(".operator-key").click(function() {
    if ($("#display-result").text() !== "") {
      $("#display-number1").text($("#display-result").text());
      $("#display-result").text("");
    };
    if ($("#display-number2").text() === "") {
      $("#display-operator").html($(this).html());
    };
  });

  $("#decimal").click(function() {
    if ($("#display-result").text() !== "") {
      $("#display-result").text("");
      $("#display-number1").text("0.");
    } else if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("0.");
      } else if ($("#display-number1").text().match(/\./)) {
        return;
      } else {
        $("#display-number1").append(".");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("0.");
      } else if ($("#display-number2").text().match(/\./)) {
        return;
      } else {
        $("#display-number2").append(".");
      };
    };
  });

  $(".number-key").click(function() {
    if ($("#display-result").text() !== "") {
      $("#display-result").text("");
    };
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text($(this).text());
      } else {
        $("#display-number1").append($(this).text());
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text($(this).text());
      } else {
        $("#display-number2").append($(this).text());
      };
    };
  });

  $("#equals").click(function() {
    if ($("#display-operator").text() === "" || $("#display-number2").text() === "") {
      return;
    } else {
      var number1 = parseFloat($("#display-number1").text());
      var number2 = parseFloat($("#display-number2").text());

      if ($("#display-operator").text() === "+") {
        $("#display-result").text(add(number1, number2));
      } else if ($("#display-operator").text() === "−") {
        $("#display-result").text(subtract(number1, number2));
      } else if ($("#display-operator").text() === "×") {
        $("#display-result").text(multiply(number1, number2));
      } else {
        $("#display-result").text(divide(number1, number2));
      };

      $("#display-number1").text("");
      $("#display-operator").text("");
      $("#display-number2").text("");
    };
  });
});
