const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");
const auth = require("../middleware/auth");
const imageUpload = require("../middleware/imageUpload");
const imageDelete = require("../middleware/imageDelete");

//articles
router.get("/articles", auth, imageUpload, articleCtrl.getArticles);
router.post("/articles", auth, imageUpload, articleCtrl.createArticle);
router.get("/articles/:id", auth, imageUpload, articleCtrl.getOneArticle);
router.put("/articles/:id", auth, imageUpload, articleCtrl.modifyOneArticle);
router.delete("/articles/:id", auth, imageDelete, articleCtrl.deleteOneArticle);

//likes
// router.post("/articles/:id/like", auth, articleCtrl.likes);

module.exports = router;
