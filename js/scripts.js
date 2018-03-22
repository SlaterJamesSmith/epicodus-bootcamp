var number1 = "0";
var number2 = "0";
var operatorSelection = "none";

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

$(document).ready(function() {
  $("#clear-all").click(function() {
    number1 = "0";
    number2 = "0";
    operatorSelection = "none";
    $("#display-number1").text("0");
    $("#display-operator").text("");
    $("#display-number2").text("");
  });

  $("#add").click(function() {
    operatorSelection = "add";
    $("#display-operator").html("&plus;");
  });

  $("#subtract").click(function() {
    operatorSelection = "subtract";
    $("#display-operator").html("&minus;");
  });

  $("#multiply").click(function() {
    operatorSelection = "multiply";
    $("#display-operator").html("&times;");
  });

  $("#divide").click(function() {
    operatorSelection = "divide";
    $("#display-operator").html("&divide;");
  });

  $("#key1").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("1");
      } else {
        $("#display-number1").append("1");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("1");
      } else {
        $("#display-number2").append("1");
      };
    };
  });

  $("#key2").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("2");
      } else {
        $("#display-number1").append("2");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("2");
      } else {
        $("#display-number2").append("2");
      };
    };
  });

  $("#key3").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("3");
      } else {
        $("#display-number1").append("3");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("3");
      } else {
        $("#display-number2").append("3");
      };
    };
  })

  $("#key4").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("4");
      } else {
        $("#display-number1").append("4");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("4");
      } else {
        $("#display-number2").append("4");
      };
    };
  })

  $("#key5").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("5");
      } else {
        $("#display-number1").append("5");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("5");
      } else {
        $("#display-number2").append("5");
      };
    };
  });

  $("#key6").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("6");
      } else {
        $("#display-number1").append("6");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("6");
      } else {
        $("#display-number2").append("6");
      };
    };
  });

  $("#key7").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("7");
      } else {
        $("#display-number1").append("7");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("7");
      } else {
        $("#display-number2").append("7");
      };
    };
  })

  $("#key8").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("8");
      } else {
        $("#display-number1").append("8");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("8");
      } else {
        $("#display-number2").append("8");
      };
    };
  });

  $("#key9").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("9");
      } else {
        $("#display-number1").append("9");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("9");
      } else {
        $("#display-number2").append("9");
      };
    };
  });

  $("#key0").click(function() {
    if (operatorSelection === "none") {
      if ($("#display-number1").html() === "0") {
        $("#display-number1").text("0");
      } else {
        $("#display-number1").append("0");
      };
    } else {
      if ($("#display-number2").html() === "" || $("#display-number2").html() === "0") {
        $("#display-number2").text("0");
      } else {
        $("#display-number2").append("0");
      };
    };
  });

});
