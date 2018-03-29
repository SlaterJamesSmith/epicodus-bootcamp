$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [];

    favoriteThings.push($("#beverage").val());
    favoriteThings.push($("#pet").val());
    favoriteThings.push($("#food").val());

    $("#results").prepend('<div class=\"record well\"><h2 class=\"nameBlank\">\'s<br>Favorite Things</h2><ul></ul></div>');

    $("#results").children("div").first().click(function() {
      $(this).remove();
    });

    $("#results .record").children(".nameBlank").first().prepend($("#name").val());

    favoriteThings.forEach(function(item) {
      $("#results .record").children("ul").first().append("<li>" + item + "</li>");
    });

    $("#results").show();

  });

});
