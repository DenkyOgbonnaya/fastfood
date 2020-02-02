'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    menuId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.hasMany(models.Extra, {
      foreignKey: 'mealId',
      as: 'extras',
      onDelete: 'CASCADE',
    })
    Meal.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      as: 'menu',
      onDelete: 'CASCADE',
    })
  };
  return Meal;
};