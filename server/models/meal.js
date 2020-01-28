'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.String,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menuId: {
      type: DataTypes.String,
      allowNull: false
    },
    extras: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    }
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      as: 'menu',
      onDelete: 'CASCADE',
    })
  };
  return Meal;
};