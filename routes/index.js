const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game-controller.js");

/* GET home page. */
router.get("/", (res) => {
  res.status(200).json("sucess");
});

router.post("/check", gameController.check);

module.exports = router;
