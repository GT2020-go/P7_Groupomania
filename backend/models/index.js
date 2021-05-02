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
db.articles = require("./article")(sequelize, Sequelize);
db.comments = require("./comment")(sequelize, Sequelize);
db.likes = require("./like")(sequelize, Sequelize);

//db associations:
db.articles.belongsTo(db.users, {
  constraints: false,
  allowNull: true,
  defaultValue: null,
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
db.users.hasMany(db.articles, {
  as: "articles",
  constraints: false,
  allowNull: true,
  defaultValue: null,
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

module.exports = db;
