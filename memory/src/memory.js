export function Card(id) {
  this.id = id;
  this.faceUp = true;
  this.position = ;
}

Card.prototype.flipUp = function () {
  this.faceUp = true;
};

Card.prototype.flipDown = function () {
  this.faceUp = false;
};

var deck = [];

export function createDeck(numberOfCardTypes) {
  for (var i = 1; i <= numberOfCardTypes; i++) {
    deck.push(new Card(i));
    deck.push(new Card(i));
  }
}

export function cardPositions() {
  var deckSize = 12;
  var positionsArray = [];
  for (var i = 1; i <= deckSize; i++) {
    positionsArray.push(i);
  }
  // Durstenfeld Shuffle Algorithm
  for (var i = positionsArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = positionsArray[i];
    positionsArray[i] = positionsArray[j];
    positionsArray[j] = temp;
  }
  for (var i = 0; i < positionsArray.length; i++) {
    deck[i].position = positionsArray[i];
  }
}
