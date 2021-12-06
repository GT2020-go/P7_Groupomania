const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");
const auth = require("../middleware/auth");
const imageUpload = require("../middleware/imageUpload");
const imageDelete = require("../middleware/imageDelete");
const imageModify = require("../middleware/imageModify");

//articles
router.get("/articles", auth, imageUpload, articleCtrl.getArticles);
router.post("/articles", auth, imageUpload, articleCtrl.createArticle);
router.get("/articles/:id", auth, articleCtrl.getOneArticle);

//editArticleImage (only image):
router.post(
  "/articles/:id/image",
  auth,
  imageDelete,
  imageUpload,
  articleCtrl.modifyOneImage
);

// editArticle title+content:
router.put("/articles/:id", auth, articleCtrl.modifyOneArticle);

router.get("/articles/:id/image", auth, articleCtrl.getImage);
router.delete(
  "/articles/:id/image",
  auth,
  imageDelete,
  articleCtrl.deleteImage
);
router.post("/articles/:id/image", auth, imageUpload, articleCtrl.addImage);

// router.put("/articles/:id/image", auth, imageModify, articleCtrl.addImage);

router.delete("/articles/:id", auth, imageDelete, articleCtrl.deleteOneArticle);

module.exports = router;
