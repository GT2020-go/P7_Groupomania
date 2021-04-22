const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");
const auth = require("../middleware/auth");

router.get("/articles", auth, articleCtrl.getarticles);
router.post("/articles", auth, articleCtrl.createArticle);
// router.get("/articles/:id", auth, articlesCtrl.getOneArticle);
// router.put("/articles/:id", auth, multer, articlesCtrl.modifyOneArticle);
// router.delete("/articles/:id", auth, multer, articlesCtrl.deleteOneArticle);

// router.post("/articles/:id/like", auth, articlesCtrl.likes);

module.exports = router;
