'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Superhero, {
        foreignKey: 'superheroId'
      });
    }
  }
  Images.init({
    imagePath:{
      type: DataTypes.STRING,
      field: "image_path",
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      },
      unique: true
    } 
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
    underscored: true
  });
  return Images;
};