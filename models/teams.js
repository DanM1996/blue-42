const { Model, DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');


class Rosters extends Model {}

Rosters.init(
  {
    title: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    pick1: DataTypes.INTEGER,
    pick2: DataTypes.INTEGER,
    pick3: DataTypes.INTEGER,
    pick4: DataTypes.INTEGER,
    pick5: DataTypes.INTEGER,
    weekPoints: DataTypes.INTEGER,
    totalPoints: DataTypes.INTEGER
  },
  {
    timestamps: false,
    sequelize
  }
);

// Export the book model for other files to use
module.exports = Rosters;
