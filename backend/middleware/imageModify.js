//Adding the dotenv security to hide critical info
require("dotenv").config();

const sequelize = require("sequelize");
const { articles } = require("../models");
const db = require("../models");
const Article = db.articles;

const aws = require("aws-sdk");
const article = require("../models/article");

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: "us-east-1",
});

const multer = require("multer");
const multerS3 = require("multer-s3");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const imageModify = (req, res, next) => {
  Article.findOne({
    where: { id: req.params.id },
  })
    .then((article) => {
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
          const upload = multer({
            fileFilter,
            storage: multerS3({
              acl: "public-read",
              s3,
              bucket: "groupomania-files-storage",
              metadata: function (req, file, cb) {
                cb(null, { fieldName: "TESTING_METADATA" });
              },
              key: function (req, file, cb) {
                const name = file.originalname.split(" ").join("_");
                const extension = MIME_TYPES[file.mimetype];
                cb(null, name + Date.now() + "." + extension);
              },
            }),
          });

          upload.single("image");

          next();
        }
      });
    })
    .catch((error) => res.status(400).json({ error }));
};

module.exports = imageModify;
