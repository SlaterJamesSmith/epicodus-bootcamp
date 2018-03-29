$(document).ready(function() {
  var favoriteFlavors = ["vanilla", "chocolate", "strawberry", "neopolitan", "black cherry", "mocha"];

  favoriteFlavors.sort();

  $("#ice-cream button").click(function() {
    favoriteFlavors.forEach(function(flavor) {
      $("#ice-cream ul").append("<li>"+ flavor.toUpperCase() + "</li>")
    });
  });

});
