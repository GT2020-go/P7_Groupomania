//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { likes } = require("../models");
const db = require("../models");

const Like = db.likes;

//create like on article
exports.createLike = (req, res, next) => {
  const like = {
    like: req.body.like,
    userId: req.body.userId,
    articleId: req.body.articleId,
  };

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
          err.message || "Some error occurred while creating the Comment.",
      });
    });
};

//modify one like
exports.modifyLike = (req, res, next) => {
  const like = req.file
    ? {
        ...JSON.parse(req.body.like),
      }
    : { ...req.body };
  Like.update({ ...like, id: req.params.id }, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Like modifie avec succes !" }))
    .catch((error) => res.status(400).json({ error }));
};