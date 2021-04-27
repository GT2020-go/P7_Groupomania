"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(User, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        foreignKey: "userId",
        TargetKey: "id",
      });
      Article.hasMany(Comment, { foreignKey: "articleId" });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.BLOB,
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "userId",
        references: {
          model: "Users",
          key: "id",
        },
      },
      comments: {
        type: DataTypes.INTEGER,
        references: {
          model: "Articles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  // the defined model is the class itself
  console.log("Article: " + (Article === sequelize.models.Article)); // true
  return Article;
};
