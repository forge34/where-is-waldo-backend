const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
// require("./character-script.js");
require("./config/database.js");
require("dotenv").config();

// require("./character-script.js");
const indexRouter = require("./routes/index");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
