$(document).ready(function() {
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  var fullDeck = [];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      fullDeck.push(rank + " of " + suit);
    });
  });

  

});
