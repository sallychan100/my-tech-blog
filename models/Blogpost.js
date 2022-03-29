const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      title:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      contents:{
        type: DataTypes.STRING,
        allowNull: false,
      },  
  },
  {
    sequelize,
  }
);

module.exports = Blogpost;