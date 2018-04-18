import { Character } from './../src/character.js';

describe('Character', function() {
  var newCharacter;

  beforeEach(function() {
    newCharacter = new Character('John', 10, 10, 5);
  });

  it('should create a character with player inputs', function() {
    newCharacter;
    expect(newCharacter.name).toEqual('John');
    expect(newCharacter.strength).toEqual(10);
    expect(newCharacter.dexterity).toEqual(10);
    expect(newCharacter.intelligence).toEqual(5);
  });

  it('should add starting health and inventory to character', function() {
    expect(newCharacter.health).toEqual(100);
    expect(newCharacter.inventory).toEqual(['bandage', 'bat', 'bandage']);
  });

  it('should update player x-coordinate by one unit to the right when moving across x-axis', function() {
    newCharacter.xCoord = 0;
    newCharacter.yCoord = 0;
    newCharacter.movePlayer("right");
    expect(newCharacter.xCoord).toEqual(1);
    expect(newCharacter.yCoord).toEqual(0);
  });

  it('should update player x-coordinate by one unit to the left when moving across x-axis', function() {
    newCharacter.xCoord = 2;
    newCharacter.yCoord = 0;
    newCharacter.movePlayer("left");
    expect(newCharacter.xCoord).toEqual(1);
    expect(newCharacter.yCoord).toEqual(0);
  });

  it('should update player y-coordinate by one unit upward when moving across y-axis', function() {
    newCharacter.xCoord = 0;
    newCharacter.yCoord = 1;
    newCharacter.movePlayer("up");
    expect(newCharacter.xCoord).toEqual(0);
    expect(newCharacter.yCoord).toEqual(0);
  });

  it('should update player y-coordinate by one unit downward when moving across y-axis', function() {
    newCharacter.xCoord = 0;
    newCharacter.yCoord = 0;
    newCharacter.movePlayer("down");
    expect(newCharacter.xCoord).toEqual(0);
    expect(newCharacter.yCoord).toEqual(1);
  });

  it('should add level-up attribute points to corresponding player attributes', function() {
    newCharacter.attributePts = 3;
    newCharacter.assignAttrPoint("str");
    newCharacter.assignAttrPoint("dex");
    newCharacter.assignAttrPoint("int");
    expect(newCharacter.strength).toEqual(11);
    expect(newCharacter.dexterity).toEqual(11);
    expect(newCharacter.intelligence).toEqual(6);
  });

  it('should not assign attribute points if character has no unusued points', function() {
    newCharacter.attributePts = 1;
    newCharacter.assignAttrPoint("str");
    newCharacter.assignAttrPoint("dex");
    newCharacter.assignAttrPoint("int");
    expect(newCharacter.strength).toEqual(11);
    expect(newCharacter.dexterity).toEqual(10);
    expect(newCharacter.intelligence).toEqual(5);
  });

  it('should add health to player when a bandage is used', function() {
    newCharacter.health = 50;
    newCharacter.useItem('bandage');
    expect(newCharacter.health).toEqual(100);
  });

  it('should add health to player, but not exceed max health, when a bandage is used', function() {
    newCharacter.health = 75;
    newCharacter.useItem('bandage');
    expect(newCharacter.health).toEqual(100);
  });

  it ('should remove one item from the inventory after each use', function() {
    newCharacter.useItem('bandage');
    expect(newCharacter.inventory).toEqual(['', 'bat', 'bandage']);
  });

  it('should increase player level when XP cap is reached', function() {
    newCharacter.currentExp = 100;
    newCharacter.checkXP();
    expect(newCharacter.level).toEqual(2);
  });

  it('should reset player XP after leveling up and add remainder XP over previous cap', function(){
    newCharacter.currentExp = 110;
    newCharacter.checkXP();
    expect(newCharacter.currentExp).toEqual(10);
  });

  it('should increase level XP requirement after level up', function() {
    newCharacter.currentExp = 110;
    newCharacter.checkXP();
    expect(newCharacter.levelExp).toEqual(120);
  });

  it('should increase max health after level up', function() {
    newCharacter.currentExp = 110;
    newCharacter.checkXP();
    expect(newCharacter.maxHealth).toEqual(120);
  });

  it('should add three unused attribute points after level up', function() {
    newCharacter.currentExp = 110;
    newCharacter.checkXP();
    expect(newCharacter.attributePts).toEqual(3);
  });

  it('should continuously level up character if current XP exceeds max XP', function() {
    newCharacter.currentExp = 300;
    newCharacter.checkXP();
    expect(newCharacter.level).toEqual(3);
    expect(newCharacter.attributePts).toEqual(6);
    expect(newCharacter.currentExp).toEqual(80);
  });
});
