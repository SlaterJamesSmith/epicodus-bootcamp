$(document).ready(function() {
  $("form").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    console.log(side1);
    console.log(side2);
    console.log(side3);

    if ((side1 + side2) <= side3) {
      $(".triangle").text("This is not a triangle.");

    } else if (side1 === side2 && side2 === side3) {
      $(".triangle").text("This is an equilateral triangle.");
    } else if (side1 === side2 || side2 === side3 ||side1 === side3) {
      $(".triangle").text("This is an isosceles triangle.")
    } else {
      $(".triangle").text("This is a scalene triangle.")
    };
    event.preventDefault();

  });

});
