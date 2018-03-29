$(document).ready(function() {
  var favoriteFlavors = ["vanilla", "chocolate", "strawberry", "neopolitan", "black cherry", "mocha"];

  favoriteFlavors.sort();

  $("button").click(function() {
    $("#result").empty();
    favoriteFlavors.forEach(function(flavor) {
      $("#result").append("<p>"+ flavor.toUpperCase() + "</p>")
    });

    $("#result").show();
  });
});
