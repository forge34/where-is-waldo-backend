const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// require("./character-script.js");
const indexRouter = require("./routes/index");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { runDB } = require("./config/database");

runDB();
const app = express();

app.set("trust proxy", 1);
// Cors setup
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

const isDevMode = process.env.NODE_ENV === "development" ? true : false;
// Session setup
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    store: MongoStore.create({
      mongoUrl: process.env.DBURL,
    }),
    cookie: {
      httpOnly: true,
      sameSite: isDevMode ? "none" : "lax",
      secure: isDevMode ? true : false,
      maxAge: 1000 * 60 * 60 * 2,
    },
  }),
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
