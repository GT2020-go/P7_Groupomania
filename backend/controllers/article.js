//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { articles } = require("../models");
const db = require("../models");
// const user = require("../models/user");
const Article = db.articles;

//display all articles:
exports.getarticles = (req, res, next) => {
  Article.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
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

  Article.create(article)
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
