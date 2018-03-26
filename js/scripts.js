$(document).ready(function() {
  var favoriteFlavors = ["vanilla", "chocolate", "strawberry", "neopolitan"]
  favoriteFlavors.forEach(function(flavor) {
    $(".icecream").append("<p>"+ flavor + "</p>")
  });

});
