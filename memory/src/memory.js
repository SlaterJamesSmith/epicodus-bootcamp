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
