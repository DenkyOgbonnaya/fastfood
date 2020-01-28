"use strict";
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      delivTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING
      },
      daysOpen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hrsOpen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      coverPhoto: DataTypes.STRING,
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {}
  );
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.hasMany(models.Menu, {
      foreignKey: 'restaurantId',
      as: 'menu'
    });
    Restaurant.belongsTo(models.User, {
      foreignKey: 'ownerId',
      as: 'owner',
      onDelete: 'CASCADE',
    })
  };
  return Restaurant;
};
