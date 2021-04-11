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
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  // the defined model is the class itself
  console.log(User === sequelize.models.User); // true
  return User;
};

// below code with DEFINE

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize(
//   "databasegroupomania",
//   process.env.DB_USER,
//   process.env.DB_PWD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//   }
// );

// const User = sequelize.define(
//   "User",
//   {
//     // Model attributes are defined here
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//   }
// );

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
