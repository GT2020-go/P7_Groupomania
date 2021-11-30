"use strict";

// name: 'GroupomaniaHRadmin',
//       email: 'GroupomaniaHRadmin@Groupomania.com',
//       password: 'Ultrahardtofindpassword',
//       admin: true,

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "HRGroupomania",
        email: "GroupomaniaHRadmin@Groupomania.com",
        password:
          "$2b$10$Pi3sy4zP811tXiIY8CCUyeT5sY0B27akTp7eADT2JSXEoUsF.s3WG", //AdminHardPassword
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
