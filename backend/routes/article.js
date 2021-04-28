const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");
const auth = require("../middleware/auth");

//articles
router.get("/articles", auth, articleCtrl.getarticles);
router.post("/articles", auth, articleCtrl.createArticle);
router.get("/articles/:id", auth, articleCtrl.getOneArticle);
router.put("/articles/:id", auth, articleCtrl.modifyOneArticle);
router.delete("/articles/:id", auth, articleCtrl.deleteOneArticle);

//comments
router.post("/articles/:id/comments", auth, articleCtrl.createComment);
// router.delete("/articles/:id/comments", auth, articleCtrl.deleteComment);

//likes
// router.post("/articles/:id/like", auth, articleCtrl.likes);

module.exports = router;
