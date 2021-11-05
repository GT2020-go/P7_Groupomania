"use strict";
const { Model } = require("sequelize");
const article = require("./article");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  // the defined model is the class itself
  console.log("User: " + (User === sequelize.models.user)); // true
  return User;
};
