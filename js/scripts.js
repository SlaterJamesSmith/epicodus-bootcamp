var favoriteThings = [];

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    favoriteThings.push($("#name").val());
    favoriteThings.push($("#beverage").val());
    favoriteThings.push($("#pet").val());
    favoriteThings.push($("#food").val());

    $("ul").append("<li>" + favoriteThings[2] + "</li>");
    $("ul").append("<li>" + favoriteThings[1] + "</li>");
    $("ul").append("<li>" + favoriteThings[3] + "</li>");

  });

});
