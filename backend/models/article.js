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
      Article.belongsTo(models.User, {
        foreignKey: "userId",
        // as: "userId",
      });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.BLOB,
      userId: {
        allowNull: false,
        field: "userId",
        references: {
          model: "Users",
          key: "id",
        },
        type: DataTypes.INTEGER,
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
