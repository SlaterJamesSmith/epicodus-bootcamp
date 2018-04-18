import { Character } from './../src/character.js';

describe('Character', function() {
  var newCharater;

  beforeEach(function() {
    newCharater = new Character('John', 10, 10, 5);
  });

  it('should create a character with player inputs', function() {
    expect(newCharacter.name).toEqual('John');
    expect(newCharacter.strength).toEqual(10);
    expect(newCharacter.dexterity).toEqual(10);
    expect(newCharacter.intelligence).toEqual(5);
  });

  it('should add starting health and inventory to character', function() {
    expect(newCharacter.health).toEqual(100);
    expect(newCharacter.inventory).toEqual(['bandage', 'bat']);
  });

  

});
