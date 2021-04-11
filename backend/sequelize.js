require("dotenv").config();

//----Sequelize
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "databasegroupomania",
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
