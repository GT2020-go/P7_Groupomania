//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { articles } = require("../models");
const db = require("../models");

// const user = require("../models/user");
const Article = db.articles;

//display all articles:
exports.getArticles = (req, res, next) => {
  Article.findAll({
    include: [
      {
        model: db.users,
        // as: "userName", //no need for alias
      },
      {
        model: db.comments,
        as: "comments", //alias needed
      },
    ],
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles.",
      });
    });
};

//create an article:
exports.createArticle = (req, res, next) => {
  const article = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    userId: req.body.userId,
  };

  console.log("article.userId: " + article.userId);

  Article.create(article, {
    include: [
      {
        model: db.users,
        // as: "userName", //no need for alias
      },
      {
        model: db.comments,
        as: "comments", //alias needed
      },
    ],
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article.",
      });
    });
};

//get one article
exports.getOneArticle = (req, res, next) => {
  Article.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: db.users,
        // as: "userName", //no need for alias
      },
      {
        model: db.comments,
        as: "comments", //alias needed
      },
    ],
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json({ error }));
};
//check include to get all comments from the article

//modify one article
exports.modifyOneArticle = (req, res, next) => {
  const article = req.file
    ? {
        ...JSON.parse(req.body.article),
      }
    : { ...req.body };
  Article.update(
    { ...article, id: req.params.id },
    { where: { id: req.params.id } }
  )
    .then(() =>
      res.status(200).json({ message: "Article modifie avec succes !" })
    )
    .catch((error) => res.status(400).json({ error }));
};

//delete one article
exports.deleteOneArticle = (req, res, next) => {
  Article.destroy({ where: { id: req.params.id } })
    .then(() =>
      res.status(200).json({ message: "Article supprime avec succes" })
    )
    .catch((error) => res.status(400).json({ error }));
};
