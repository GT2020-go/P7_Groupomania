//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { users } = require("../models");
const db = require("../models");
const User = db.users;

//dowload to S3
const upload = require("../middleware/ImageUpload");
const imageDelete = require("../middleware/imageDelete");
const imageModify = require("../middleware/imageModify");

//sign up a new user:
exports.signup = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Encrypt password with Bcrypt (sync function)
  const hash = bcrypt.hashSync(req.body.password, 10);
  // Create a user
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: hash,
  };

  // Save User in the database
  User.create(user)
    .then(() => {
      res.status(201).send("User created"); //here we do not send the data because password could be hacked
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      console.log(
        "this is the user: " +
          user +
          " and this is the user's type :" +
          typeof user
      );
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user.id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//get the user
exports.me = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;
  User.findOne({
    where: { id: userId }, //we want only the user corresponding to the id in parameter
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json({ error }));
};
