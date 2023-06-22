const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    // Seed users
    const users = await User.bulkCreate(userData, { individualHooks: true, returning: true });
    const blogs = [];
    // Seed blogs
    for (const blog of blogData) {
      const createdBlog = await Blog.create({
        ...blog,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
      blogs.push(createdBlog);
    }

    // Seed comments and associate comments with users and blogs
   for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: blogs[Math.floor(Math.random() * blogs.length)].id,

    });
  }
    console.log('Database seeded successfully.');

  } catch (error) {
    console.error('Error seeding database:', error);
  }

  // Exit the process
  process.exit(0);
};

seedDatabase();
