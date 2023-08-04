'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superpower.belongsToMany(models.Superhero, {
        through: 'superheroes_to_superpowers',
        foreignKey: 'superheroId'
      });
    }
  }
  Superpower.init({
    powerName:{
      type: DataTypes.STRING,
      unique: true,
      allowNull:false,
      validate: {
        notEmpty:true,
        notNull: true
      }
    },
    description:{
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName: 'superpowers',
    underscored:true
  });
  return Superpower;
};