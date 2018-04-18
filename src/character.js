export class Character {
  constructor(name, str, dex, int) {
    this.name = name;
    this.strength = str;
    this.dexterity = dex;
    this.intelligence = int;
    this.health = 100;
    this.inventory = ['bandage', 'bat'];
  }
}
