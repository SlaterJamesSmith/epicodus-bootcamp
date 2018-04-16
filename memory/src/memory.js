export function Card(type) {
  this.type = type;
  this.faceUp = true;
  this.position;
}

Card.prototype.flipUp = function () {
  this.faceUp = true;
};

Card.prototype.flipDown = function () {
  this.faceUp = false;
};

export function createDeck(deck) {
  var numberOfCardTypes = 6;
  for (var i = 1; i <= numberOfCardTypes; i++) {
    deck.push(new Card(i));
    deck.push(new Card(i));
  }
}

export function cardPositions(deck) {
  var deckSize = 12;
  var positionsArray = [];
  for (var a = 1; a <= deckSize; a++) {
    positionsArray.push(a);
  }
  // Durstenfeld Shuffle Algorithm
  for (var i = positionsArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = positionsArray[i];
    positionsArray[i] = positionsArray[j];
    positionsArray[j] = temp;
  }
  for (var b = 0; b < positionsArray.length; b++) {
    deck[b].position = positionsArray[b];
  }
}
