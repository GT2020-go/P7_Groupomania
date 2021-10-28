//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { comments } = require("../models");
const db = require("../models");

const Comment = db.comments;

//create comment on article
exports.createComment = (req, res, next) => {
  const comment = {
    comment: req.body.comment,
    // articleId: req.params.id,
    userId: req.body.userId,
    articleId: req.body.articleId,
  };

  console.log(req.body);

  Comment.create(comment, {
    include: [
      {
        model: db.articles,
        // as: "articleId",
      },
      {
        model: db.users,
        // as: "userName",
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

//delete one comment
exports.deleteOneComment = (req, res, next) => {
  Comment.destroy({
    where: { id: req.params.id },
  })
    .then(() =>
      res.status(200).json({ message: "Article supprime avec succes" })
    )
    .catch((error) => res.status(400).json({ error }));
};
