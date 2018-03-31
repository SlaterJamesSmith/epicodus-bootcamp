$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 + side2 <= side3) {
      $("#result").text("This is not a triangle.");
    } else if (side1 === side2 && side2 === side3) {
      $("#result").text("This is an equilateral triangle.");
    } else if (side1 === side2 || side2 === side3 ||side1 === side3) {
      $("#result").text("This is an isosceles triangle.")
    } else {
      $("#result").text("This is a scalene triangle.")
    }

    $("#result").show();
    $("form")[0].reset();
  });
});
