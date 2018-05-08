$(document).ready(function() {
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  var fullDeck = [];

  suits.forEach(function(suit) {
    $("#result").prepend('<div class="suit well display-none"><h2>' + suit + '</h2><ul></ul></div>')
    ranks.forEach(function(rank) {
      $(".suit").children("ul").first().append("<li>" + rank + " of " + suit + "</li>");
    });
  });

  $("#create-deck").click(function() {
    $(".display-none").fadeIn();
  });
});
