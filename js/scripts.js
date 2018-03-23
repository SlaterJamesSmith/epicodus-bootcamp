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
  });

  $(".operator-key").click(function() {
    $("#display-operator").html($(this).html());
  });

  $("#key1").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("1");
      } else {
        $("#display-number1").append("1");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("1");
      } else {
        $("#display-number2").append("1");
      };
    };
  });

  $("#key2").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("2");
      } else {
        $("#display-number1").append("2");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("2");
      } else {
        $("#display-number2").append("2");
      };
    };
  });

  $("#key3").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("3");
      } else {
        $("#display-number1").append("3");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("3");
      } else {
        $("#display-number2").append("3");
      };
    };
  })

  $("#key4").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("4");
      } else {
        $("#display-number1").append("4");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("4");
      } else {
        $("#display-number2").append("4");
      };
    };
  })

  $("#key5").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("5");
      } else {
        $("#display-number1").append("5");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("5");
      } else {
        $("#display-number2").append("5");
      };
    };
  });

  $("#key6").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("6");
      } else {
        $("#display-number1").append("6");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("6");
      } else {
        $("#display-number2").append("6");
      };
    };
  });

  $("#key7").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("7");
      } else {
        $("#display-number1").append("7");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("7");
      } else {
        $("#display-number2").append("7");
      };
    };
  })

  $("#key8").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("8");
      } else {
        $("#display-number1").append("8");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("8");
      } else {
        $("#display-number2").append("8");
      };
    };
  });

  $("#key9").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("9");
      } else {
        $("#display-number1").append("9");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("9");
      } else {
        $("#display-number2").append("9");
      };
    };
  });

  $("#key0").click(function() {
    if ($("#display-operator").text() === "") {
      if ($("#display-number1").text() === "0") {
        $("#display-number1").text("0");
      } else {
        $("#display-number1").append("0");
      };
    } else {
      if ($("#display-number2").text() === "" || $("#display-number2").text() === "0") {
        $("#display-number2").text("0");
      } else {
        $("#display-number2").append("0");
      };
    };
  });

  $("#equals").click(function() {
    if ($("#display-operator").text() === "" || $("#display-number2").text() === "") {
      return;
    } else {
      var number1 = parseInt($("#display-number1").text());
      var number2 = parseInt($("#display-number2").text());

      if ($("#display-operator").text() === "+") {
        $("#display-number1").text(add(number1, number2));
      } else if ($("#display-operator").text() === "−") {
        $("#display-number1").text(subtract(number1, number2));
      } else if ($("#display-operator").text() === "×") {
        $("#display-number1").text(multiply(number1, number2));
      } else {
        $("#display-number1").text(divide(number1, number2));
      };

      $("#display-operator").text("");
      $("#display-number2").text("");
    };
  });
});
