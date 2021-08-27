const { Model, DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');


class Rosters extends Model {}

Rosters.init(
  {
    title: DataTypes.STRING,
    pick1: DataTypes.STRING,
    pick2: DataTypes.STRING,
    pick3: DataTypes.STRING,
    pick4: DataTypes.STRING,
    pick5: DataTypes.STRING
  },
  {
    sequelize
  }
);

// Export the book model for other files to use
module.exports = Rosters;
