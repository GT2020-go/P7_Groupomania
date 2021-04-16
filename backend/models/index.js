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

//connection to DB:
sequelize
  .authenticate()
  .then((res) => console.log("connected"))
  .catch((err) => console.error("error connecting: " + err.stack));

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user")(sequelize, Sequelize);

module.exports = db;
