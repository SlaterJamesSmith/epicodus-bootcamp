import { Character } from '../src/character.js';

describe('Character', function(){
  it('should create a character with player inputs', function(){
    var newCharacter = new Character('John', 10, 10, 5);
    expect(newCharacter.name).toEqual('John');
    expect(newCharacter.strength).toEqual(10);
    expect(newCharacter.dexterity).toEqual(10);
    expect(newCharacter.intelligence).toEqual(5);
  });
});
