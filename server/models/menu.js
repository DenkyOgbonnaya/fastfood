"use strict";
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      photo: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    {}
  );
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.hasMany(models.Meal, {
      foreignKey: "menuId",
      as: "meals",
      onDelete: "CASCADE"
    });
    Menu.belongsTo(models.Restaurant, {
      foreignKey: "restaurantId",
      as: "restaurant",
      onDelete: "CASCADE"
    });
  };
  return Menu;
};
