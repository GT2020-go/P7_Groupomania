//Adding the dotenv security to hide critical info
require("dotenv").config();

const sequelize = require("sequelize");
const { articles } = require("../models");
const db = require("../models");
const Article = db.articles;

const aws = require("aws-sdk");
const article = require("../models/article");

const s3 = new aws.S3({
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  region: "us-east-1",
});

const imageDelete = (req, res, next) => {
  // console.log("toto");
  // console.log(article.image);
  // if (article.image) {
  Article.findOne({
    where: { id: req.params.id },
  })
    .then((article) => {
      if (article.image) {
        const params = {
          Bucket: "groupomania-files-storage",
          Key: article.image.split("/").slice(-1)[0],
        };
        s3.deleteObject(params, (err, data) => {
          if (err) {
            res
              .status(500)
              .send({ message: err.message || "some error occured" });
          } else {
            next();
          }
        });
      } else {
        next();
      }
    })
    .catch((error) => res.status(400).json({ error }));
};

module.exports = imageDelete;
