const mongoose = require('mongoose');
const { Schema } = mongoose;

const CharacterSchema = new Schema({
  name: {
    requred: true,
    type: String,
  },
  class: {
    required: true,
    type: String,
  },
});

CharacterSchema.methods.getCharacterName = function() {
  return this.name;
};

CharacterSchema.statics.getAllCharacters = cb => {
  Character.find({}, (err, characters) => {
    if (err) console.error(err);
    cb(characters);
  });
};

const Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;
