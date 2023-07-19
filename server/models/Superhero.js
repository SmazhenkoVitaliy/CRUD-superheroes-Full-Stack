'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init({
    nickName:{
      field: 'nick_name',
      type:  DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    realName:{
      field: 'real_name',
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    originDescription:{
      field: "origin_description",
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }

    },
    cathPhrase:{
      field: "cath_phrase",
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    } 
  }, {
    sequelize,
    modelName: 'Superhero',
    tableName: 'superheroes',
    underscored: true
  });
  return Superhero;
};