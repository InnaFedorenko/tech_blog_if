// Load environment variables from .env file
require('dotenv').config();

// Import Sequelize library
const Sequelize = require('sequelize');

// Configure Sequelize instance based on environment variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JAWSDB_URL for deployment
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost', // Local MySQL server hostname
      dialect: 'mysql', // MySQL database dialect
      dialectOptions: {
        decimalNumbers: true, // Enable support for decimal numbers
      },
    });

// Export the configured Sequelize instance
module.exports = sequelize;
