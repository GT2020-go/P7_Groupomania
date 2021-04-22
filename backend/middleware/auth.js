require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("here");
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    console.log(decodedToken);
    const userId = decodedToken.userId;
    console.log("thisis the userId: " + userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      console.log("next");
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
