const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedBlogpost = require('./BlogpostData');
const seedComment = require('./CommentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogpost();

  await seedComment();

  process.exit(0);
};

seedAll();