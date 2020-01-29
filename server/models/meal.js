'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menuId: {
      type: DataTypes.STRING,
      allowNull: false
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