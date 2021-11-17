//security:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("sequelize");
const { articles } = require("../models");
const db = require("../models");
const Article = db.articles;

//dowload to S3
const upload = require("../middleware/ImageUpload");
const imageDelete = require("../middleware/imageDelete");
const imageModify = require("../middleware/imageModify");

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
      {
        model: db.likes, //we want to see all the likes associated to the article
        as: "likes", //alias needed
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
    image: req.file ? req.file.location : null,
    userId: req.body.userId,
  };

  //here we are missing an important thing: image gets uploaded to AWS even when createArticle is returning an error

  Article.create(article, {
    include: [
      {
        model: db.users,
      },
      {
        model: db.comments,
        as: "comments", //alias needed
      },
      {
        model: db.likes, //we want to see all the likes associated to the article
        as: "likes", //alias needed
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
    where: { id: req.params.id }, //we want only the article corresponding to the id in parameter
    include: [
      {
        model: db.users, // useless??
      },
      {
        model: db.comments, //we want to see all the comments associated to the article
        as: "comments", //alias needed
      },
      {
        model: db.likes, //we want to see all the likes associated to the article
        as: "likes", //alias needed
      },
    ],
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json({ error }));
};

//modify one article
exports.modifyOneArticle = (req, res, next) => {
  const article = req.file
    ? {
        ...JSON.parse(req.body.article),
        image: req.file.location,
      }
    : { ...req.body };
  Article.update({ ...article }, { where: { id: req.params.id } })
    .then(() =>
      res.status(200).json({ message: "Article modifie avec succes !" })
    )
    .catch((error) => res.status(400).json({ error }));
};

//delete one article
exports.deleteOneArticle = (req, res, next) => {
  Article.destroy({ where: { id: req.params.id }, omitNull: false })
    .then(() =>
      res.status(200).json({ message: "Article supprime avec succes" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getImage = (req, res, next) => {
  Article.findOne({
    where: { id: req.params.id },
  })
    .then((article) => {
      const image = article.image;
      res.status(200).json(image);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteImage = (req, res, next) => {
  Article.update(
    { image: "" },
    {
      where: { id: req.params.id },
    }
  )
    .then(() =>
      res.status(200).json({ message: "Image supprimee avec succes" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.addImage = (req, res, next) => {
  Article.update(
    { image: req.file.location },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => res.status(200).json({ message: "Image ajoutee avec succes" }))
    .catch((error) => res.status(400).json({ error }));
};
