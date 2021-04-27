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
      Comment.belongsTo(Article, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        foreignKey: "articleId",
        TargetKey: "id",
      });
      Comment.belongsTo(User, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        foreignKey: "userId",
        TargetKey: "id",
      });
    }
  }
  Comment.init(
    {
      comment: DataTypes.TEXT,
      articleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "articleId",
        references: {
          model: "Articles",
          key: "id",
        },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "userId",
        references: {
          model: "Users",
          key: "id",
        },
      },
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
