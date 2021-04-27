const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");
const auth = require("../middleware/auth");

router.get("/articles", auth, articleCtrl.getarticles);
router.post("/articles", auth, articleCtrl.createArticle);
router.get("/articles/:id", auth, articleCtrl.getOneArticle);
router.put("/articles/:id", auth, articleCtrl.modifyOneArticle);
router.delete("/articles/:id", auth, articleCtrl.deleteOneArticle);

// router.post("/articles/:id/like", auth, articleCtrl.likes);

module.exports = router;
