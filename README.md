This is the project for Groupomania's Social Network

by GT

// to start seed on backend use Sequelize-CLI commands:

<!-- Creating the first Seed
Suppose we want to insert some data into a few tables by default. If we follow up on the previous example we can consider creating a demo user for the User table.

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database tables with sample or test data.

Let's create a seed file which will add a demo user to our User table. -->

npx sequelize-cli seed:generate --name demo-user

<!-- This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-user.js. It follows the same up / down semantics as the migration files.

Now we should edit this file to insert demo user to User table. -->

module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('Users', [{
firstName: 'John',
lastName: 'Doe',
email: 'example@example.com',
createdAt: new Date(),
updatedAt: new Date()
}]);
},
down: (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Users', null, {});
}
};

<!-- Running Seeds
In last step you created a seed file; however, it has not been committed to the database. To do that we run a simple command. -->

npx sequelize-cli db:seed:all

<!-- This will execute that seed file and a demo user will be inserted into the User table.

Note: Seeder execution history is not stored anywhere, unlike migrations, which use the SequelizeMeta table. If you wish to change this behavior, please read the Storage section.

Undoing Seeds
Seeders can be undone if they are using any storage. There are two commands available for that: -->

<!-- If you wish to undo the most recent seed: -->

npx sequelize-cli db:seed:undo

<!-- If you wish to undo a specific seed: -->

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

<!-- If you wish to undo all seeds: -->

npx sequelize-cli db:seed:undo:all
