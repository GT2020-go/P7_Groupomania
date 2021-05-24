const express = require("express");
const router = express.Router();

const likeCtrl = require("../controllers/like");
const auth = require("../middleware/auth");

//likes
router.post("/likes", auth, likeCtrl.createLike);
router.delete("/likes/:id", auth, likeCtrl.deleteLike);

module.exports = router;
