const express = require("express");

//Adding the dotenv security to hide critical info
require("dotenv").config();

const bodyParser = require("body-parser");

//security:
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

// const path = require("path");

//connection to DB:

// const mongoose = require("mongoose");
// mongoose
//   .connect(
//     "mongodb+srv://User1:D57BZ36m77Wia3p@cluster0.xlqdt.mongodb.net/sopekocko?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("Connexion à MongoDB réussie !"))
//   .catch(() => console.log("Connexion à MongoDB échouée !"));

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
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

// app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/api", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
