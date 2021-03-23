const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: {
    type: Number,
    required: true,
    min: [1, "minimum is 1"],
    max: [10, "maximum is 10"],
  },
  likes: { type: Number, required: true, min: [0, "minimum is 0"] },
  dislikes: { type: Number, required: true, max: [0, "maximum is 0"] },
  usersLiked: [{ type: String, required: false }],
  usersDisliked: [{ type: String, required: false }],
});

module.exports = mongoose.model("Sauce", sauceSchema);
