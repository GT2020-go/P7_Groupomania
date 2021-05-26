"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "article",
    }
  );
  // the defined model is the class itself
  console.log("Article: " + (Article === sequelize.models.article)); // true
  return Article;
};
