$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [];

    favoriteThings.push($("#beverage").val());
    favoriteThings.push($("#pet").val());
    favoriteThings.push($("#food").val());

    $("#result").prepend('<div class="record well"><p class="nameBlank">\'s Favorite Things</h2><ul></ul></p>');

    $("#result").children("div").first().click(function() {
      $(this).remove();
    });

    $("#result .record").children(".nameBlank").first().prepend($("#name").val());

    favoriteThings.forEach(function(item) {
      $("#result").children(".record").first().append("<p>" + item + "</p>");
    });

    $("#result").show();
  });
});
