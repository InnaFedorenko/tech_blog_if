const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
//Describes Users one-to-many relationship to Blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate:'CASCADE',
});
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

//Describes Users one-to-many relationship to Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate:'CASCADE',
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//Describes Users one-to-many relationship to Comments
Blog.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  onUpdate:'CASCADE',
});
Comment.belongsTo(Blog, {
  foreignKey: 'post_id'
});

module.exports = { User, Blog, Comment };
