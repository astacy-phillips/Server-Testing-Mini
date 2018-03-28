const mongoose = require('mongoose');

const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const Character = require('./models');

describe('Characters', () => {
  describe('getCharacterName', () => {
    it('should return the expected Character name', () => {
      const character = new Character({
        name: 'Mickey',
        class: 'Ninja',
      });
      expect(character.getCharacterName()).to.equal('Mickey');
    });
  });

  describe('getAllCharacters', () => {
    it('should return all the Characters', () => {
      sinon.stub(Character, 'find');
      Character.find.yields(null, [
        { name: 'Mickey', class: 'Ninja' },
        { name: 'Tella', class: 'Mage' },
      ]);
      Character.getAllCharacters(characters => {
        expect(characters.length).to.equal(2);
        expect(characters[1].name).to.equal('Tella');
        //Character.find.restore();
      });
    });
  });
});
