const { body } = require("express-validator");
const CharacterModel = require("../models/character-model");

module.exports.start = (req, res) => {
  req.session.startTime = Date.now();
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
    const x = body.x;
    const y = body.y;

    const character = await CharacterModel.findOne()
      .where("name")
      .equals(body.name)
      .exec();

    const newX = character.x * req.body.width;
    const newY = character.y * req.body.height;
    const newWidth = character.width * req.body.width;
    const newHeight = character.height * req.body.height;

    if (character === null) res.json("Character not found");
    else if (
      x >= newX &&
      x <= newX + newWidth &&
      y >= newY &&
      y <= newY + newHeight
    ) {
      res.status(200).json({
        message: "Character found",
        found: true,
        x: newX + newWidth / 2,
        y: newY + newHeight / 2,
      });
    } else {
      res.status(200).json({ message: "not correct", found: false });
    }
  },
];
