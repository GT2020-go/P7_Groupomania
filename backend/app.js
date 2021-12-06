const express = require("express");

//Adding the dotenv security to hide critical info
require("dotenv").config();

//sequelize
require("sequelize");

const bodyParser = require("body-parser");

//security:
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const articleRoutes = require("./routes/article");
const commentRoutes = require("./routes/comment");
const likeRoutes = require("./routes/like");

// const path = require("path");

const db = require("./models");

//running the code below will execute DROP TABLE IF EXISTS everytime we restart the server:

db.sequelize.sync({
  force: true,
});

const app = express();

//CORS:
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use("/api", commentRoutes);
app.use("/api", articleRoutes);
app.use("/api/auth", userRoutes);
app.use("/api", likeRoutes);

module.exports = app;
