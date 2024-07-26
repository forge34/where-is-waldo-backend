const { body, validationResult } = require("express-validator");
const CharacterModel = require("../models/character-model");
const Users = require("../models/player-model");

module.exports.start = (req, res) => {
  req.session.startTime = Date.now();
  res.json("test");
};

module.exports.end = (req, res) => {
  req.session.score = Date.now() - Number(req.session.startTime);
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

    const margin = 1.03;
    const newX = character.x * req.body.width;
    const newY = character.y * req.body.height;
    const newWidth = character.width * req.body.width;
    const newHeight = character.height * req.body.height;

    if (character === null) res.json("Character not found");
    else if (
      x >= newX &&
      x <= newX + newWidth * margin &&
      y >= newY &&
      y <= newY + newHeight * margin
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

module.exports.save = [
  body("playername").trim().isLength({ min: 1 }).escape(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    }
    const user = new Users({
      name: req.body.playername,
      score: req.session.score,
    });

    await user.save();

    res.json("done");
  },
];

module.exports.leaderboard = async (req, res) => {
  const users = await Users.find().sort("score").exec();

  res.json({ users: users });
};
