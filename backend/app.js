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

const path = require("path");

//connection to DB:
const sequelize = require("./sequelize");
sequelize
  .authenticate()
  .then((res) => console.log("connected"))
  .catch((err) => console.error("error connecting: " + err.stack));

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

// app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/api", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
