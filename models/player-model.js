const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerScehma = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
});

const Players = mongoose.model("Player", PlayerScehma);

module.exports = Players;
