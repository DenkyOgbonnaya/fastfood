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
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    restaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
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