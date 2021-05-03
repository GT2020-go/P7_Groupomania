const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

//comments
router.get("/comments/:id", auth, commentCtrl.getComments);

router.post("/comments", auth, commentCtrl.createComment); //pas sur article

router.delete("/comments/:id", auth, commentCtrl.deleteOneComment);

module.exports = router;
