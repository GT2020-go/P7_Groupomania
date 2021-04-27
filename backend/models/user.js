"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(Article, { foreignKey: "userId" });
      User.hasMany(Comment, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      articles: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  // the defined model is the class itself
  console.log("User: " + (User === sequelize.models.User)); // true
  return User;
};
