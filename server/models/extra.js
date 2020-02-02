'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extra = sequelize.define('Extra', {
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
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Extra.associate = function(models) {
    // associations can be defined here
    Extra.belongsTo(models.Meal, {
      foreignKey: "mealId",
      as: "meal",
      onDelete: "CASCADE"
    })
  };
  return Extra;
};