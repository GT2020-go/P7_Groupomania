//Adding the dotenv security to hide critical info
require("dotenv").config();

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const article = require("../models/article");

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  region: "us-east-1",
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

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
      cb(null, "picture");
    },
  }),
});

module.exports = upload.single("image");
