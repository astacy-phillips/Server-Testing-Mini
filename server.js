const express = require('express');
const morgan = require('morgan');

const server = express();
server.use(morgan('combined'));
server.use(express.json);

// const Character = require('./models');

// server.post('/character', (req, res) => {
//   const characterInfo = req.body;
//   const newCharacter = new Character(characterInfo);

//   newCharacter
//     .save()
//     .then(character => {
//       res.status(200).json(character);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// server.get('/characters', (req, res) => {
//   Character.find({})
//     .then(characters => {
//       res.status(200).json(characters);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// server.put('/characters', (req, res) => {
//   const updatedInfo = req.body;

//   Character.findOneAndUpdate(req.body.name, updatedInfo)
//     .then(character => {
//       character = updatedInfo;
//       res.status(200).json(character);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// server.delete('/characters', (req, res) => {
//   const { name, location } = req.body;
//   User.find({ name })
//     .remove()
//     .then(res => {
//       res.status(200).json({ Success: `Deleted ${name}` });
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = server;
