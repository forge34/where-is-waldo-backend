const { body } = require("express-validator");
const CharacterModel = require("../models/character-model");

module.exports.start = (req, res) => {
  req.session.startTime = Date.now();
  console.log(req.session);
  res.json("test");
};

module.exports.end = (req, res) => {
  console.log(Date.now() - Number(req.session.startTime));
  res.json("timer end");
};

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
      res.status(200).json({
        message: "Character found",
        found: true,
        x: character.x + character.width / 2.3,
        y: character.y + character.height / 2.3,
      });
    } else {
      res.status(200).json({ message: "not correct", found: false });
    }
  },
];
