//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { likes } = require("../models");
const db = require("../models");

const Like = db.likes;

const { Op } = require("sequelize");

//create like on article
exports.createLike = (req, res, next) => {
  const like = {
    like: req.body.like,
    userId: req.body.userId,
    articleId: req.body.articleId,
  };

  Like.destroy({
    where: {
      [Op.and]: [
        { userId: req.body.userId },
        { articleId: req.body.articleId },
      ],
    },
  })
    .then(() => {
      Like.create(like, {
        include: [
          {
            model: db.articles,
          },
          {
            model: db.users,
          },
        ],
      })
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Like.",
          });
        });
    })
    .catch((error) => res.status(400).json({ error }));
};

//delete one like
exports.deleteLike = (req, res, next) => {
  Like.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Like supprime avec succes" }))
    .catch((error) => res.status(400).json({ error }));
};
