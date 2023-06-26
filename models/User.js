const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        len: [1, 15], // Minimum length of 1 and maximum length of 15
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: true,
      validate: {
        notNull: true, 
        //isEmail: true, // Validate email format
        len: [1, 255], // Specify the minimum and maximum length for email
        // isEmailTemplate(value) {
        //   // Custom pattern matching for email template
        //   if (!/^[\w.+-]+@example\.com$/.test(value)) {
        //     throw new Error('Email must be in the example.com domain.');
        //   }
        // },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,128],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
