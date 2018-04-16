export function Card(id, img) {
  this.id = id;
  this.img = img;
  this.faceUp = false;
}

Card.prototype.flipUp = function () {
  this.faceUp = true;
};

Card.prototype.flipDown = function () {
  this.faceUp = false;
};

export function cardPositions() {
  var deckSize = 12;
  var positionsArray = [];
  for (var i = 1; i <= deckSize; i++) {
    positionsArray.push(i);
  }
  // Durstenfeld Shuffle Algorithm
  for (var i = positionsArray.length -1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = positionsArray[i];
    positionsArray[i] = positionsArray[j];
    positionsArray[j] = temp;
  }
  return positionsArray;
}
