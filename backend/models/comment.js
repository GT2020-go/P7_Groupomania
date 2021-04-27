"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsToMany(Article, {
        trough: "User",
      });
    }
  }
  Comment.init(
    {
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  // the defined model is the class itself
  console.log("Comment: " + (Comment === sequelize.models.Comment)); // true
  return Comment;
};
