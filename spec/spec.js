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
    expect(newCharacter.inventory).toEqual(['bandage', 'bat']);
  });

  it('should update player x-coordinate by one unit when moving across x-axis', function () {
    newCharacter.xCoord = 0;
    newCharacter.yCoord = 0;
    newCharacter.movePlayer("right");
    expect(newCharacter.xCoord).toEqual(1);
    expect(newCharacter.yCoord).toEqual(0);
  });

});
