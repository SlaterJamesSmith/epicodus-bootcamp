export class Character {
  constructor(name, str, dex, int) {
    this.name = name;
    this.strength = str;
    this.dexterity = dex;
    this.intelligence = int;
    this.health = 100;
    this.inventory = ['bandage', 'bat'];
    this.xCoord = 0;
    this.yCoord = 0;
    this.attributePts = 0;

  }
  movePlayer(direction) {
    if (direction === 'right') {
      this.xCoord++;
    } else if (direction === 'left') {
      this.xCoord--;
    } else if (direction === 'up') {
      this.yCoord--;
    } else if (direction === 'down') {
      this.yCoord++;
    }
  }
  assignAttrPoint(attribute) {
    if (this.attributePts === 0) {
      return;
    } else {
      if (attribute === "str") {
        this.strength++;
        this.attributePts--;
      } else if (attribute === "dex") {
        this.dexterity++;
        this.attributePts--;
      } else if (attribute === "int") {
        this.intelligence++;
        this.attributePts--;
      }
    }
  }
  useItem(item) {
    if (item === 'bandage') {
      this.health += 50;
    }
  }
}
