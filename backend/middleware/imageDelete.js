//Adding the dotenv security to hide critical info
require("dotenv").config();

const aws = require("aws-sdk");

const s3 = new aws.S3({
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  region: "us-east-1",
});

const fileName = "picture";

const imageDelete = () => {
  const params = {
    Bucket: "groupomania-files-storage", // pass your bucket name
    Key: fileName, // file will be saved as testBucket/contacts.csv
  };
  s3.deleteObject(params, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
};

module.exports = imageDelete;
