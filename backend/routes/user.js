const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

const auth = require("../middleware/auth");

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.post("/signup", userCtrl.signup);
router.post("/login", limiter, userCtrl.login);
router.post("/me", userCtrl.me);
router.delete("/me/:id", auth, userCtrl.deleteUser);

module.exports = router;
