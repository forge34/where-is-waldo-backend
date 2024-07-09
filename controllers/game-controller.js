const { body } = require("express-validator");
const CharacterModel = require("../models/character-model");

module.exports.check = [
  body("x").toInt().escape(),
  body("y").toInt().escape(),
  body("name").trim().escape(),
  async (req, res) => {
    const body = req.body;
    console.log(req.body);
    const character = await CharacterModel.findOne()
      .where("name")
      .equals(body.name)
      .exec();
    if (character === null) res.json("Character not found");
    else if (
      body.x >= character.x &&
      body.x <= character.x + character.width &&
      body.y >= character.y &&
      body.y <= character.y + character.height
    ) {
      res.status(200).json("Character found");
    } else {
      res.status(404).json("not correct");
    }
  },
];
