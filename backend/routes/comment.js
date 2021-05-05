const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

//comments
router.post("/comments", auth, commentCtrl.createComment);
router.delete("/comments/:id", auth, commentCtrl.deleteOneComment);

module.exports = router;
