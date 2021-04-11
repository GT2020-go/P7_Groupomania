//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const User = require("../models/user");

//sign up a new user:
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      console.log(req.body);
      console.log("email " + req.body.email);
      console.log("type of email: " + typeof req.body.email);
      console.log("hash: " + hash);
      console.log("type of hash: " + typeof hash);
      user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => console.log("error 500: " + error)); //res.status(500).json({ error }));
};

// exports.login = (req, res, next) => {
//   User.findOne({ email: req.body.email })
//     .then((user) => {
//       if (!user) {
//         return res.status(401).json({ error: "Utilisateur non trouvé !" });
//       }
//       bcrypt
//         .compare(req.body.password, user.password)
//         .then((valid) => {
//           if (!valid) {
//             return res.status(401).json({ error: "Mot de passe incorrect !" });
//           }
//           res.status(200).json({
//             userId: user._id,
//             token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
//               expiresIn: "24h",
//             }),
//           });
//         })
//         .catch((error) => res.status(500).json({ error }));
//     })
//     .catch((error) => res.status(500).json({ error }));
// };
