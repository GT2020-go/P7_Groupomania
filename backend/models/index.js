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
db.admins = require("./admin")(sequelize, Sequelize);

// db.articles.belongsTo(db.users),
//   {
//     foreignKey: "userId",
//     onDelete: "cascade",
//     onUpdate: "cascade",
//   };

// db.comments.belongsTo(db.users),
//   {
//     foreignKey: "userId",
//     onDelete: "cascade",
//     onUpdate: "cascade",
//   };

// db.articles.hasMany(db.comments), {};
// db.articles.hasMany(db.likes), {};
// db.comments.hasMany(db.likes), {};
// db.users.hasMany(db.articles), {};

// db.likes.belongsTo(db.users),
//   {
//     foreignKey: "userId",
//     onDelete: "cascade",
//     onUpdate: "cascade",
//   };

// db.likes.belongsTo(db.comments),
//   {
//     foreignKey: "commentId",
//     onDelete: "cascade",
//     onUpdate: "cascade",
//   };

// db.comments.belongsTo(db.articles),
//   {
//     through: "article_id",
//     onDelete: "cascade",
//     onUpdate: "cascade",
//   };

// db.admins.belongsTo(db.users),
//   {
//     through: "user_id",
//     onDelete: "cascade",
//     onUpdate: "cascade",
//   };

module.exports = db;
