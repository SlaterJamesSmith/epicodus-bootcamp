class Character {
  constructor(name, str, dex, int) {
    this.name = name;
    this.level = 1;
    this.maxHealth = 100;
    this.strength = str;
    this.dexterity = dex;
    this.intelligence = int;
    this.levelExp = 100;
    this.currentExp = 0;
    this.health = 100;
    this.inventory = ['bandage', 'bat', 'bandage'];
    this.xCoord = 0;
    this.yCoord = 0;
    this.attributePts = 0;

  }
  genRandomNumber(){
    return Math.random();
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
    this.encounter = this.genRandomNumber();
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
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i] === item) {
        if (item === 'bandage') {
          this.health += 50;
          if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
          }
        }
        return this.inventory.splice(i, 1, '');
      }
    }
  }
  checkXP() {
    while (this.currentExp >= this.levelExp) {
      this.level++;
      this.currentExp -= this.levelExp;
      this.levelExp *= 1.2;
      this.maxHealth *= 1.2;
      this.attributePts += 3;
    }
  }
  encounterCheck() {
    if (this.encounter < 0.2) {
      return true;
    } else {
      return false;
    }
  }
  hitMiss(roll) {
    let isHit = false;
    if (roll >= 0.25) {
      isHit = true;
      return isHit;
    } else {
      return isHit;
    }
  }
}

export {Character};
