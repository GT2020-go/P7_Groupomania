//Adding the dotenv security to hide critical info
require("dotenv").config();

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const article = require("../models/article");

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: "us-east-1",
});

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

module.exports = upload.single("image");
