const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeaderBoardScehma = new Schema({
  players: [{ type: mongoose.Schema.ObjectId, ref: "player" }],
});

const LeaderBoard = mongoose.model("Leaderboard", LeaderBoardScehma);

module.exports = LeaderBoard;
