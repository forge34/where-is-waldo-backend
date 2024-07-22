const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game-controller.js");

/* GET home page. */
router.get("/", (res) => {
  res.status(200).json("sucess");
});

router.post("/check", gameController.check);
router.get("/start", gameController.start);
router.get("/end", gameController.end);
router.post("/save", gameController.save);

module.exports = router;
