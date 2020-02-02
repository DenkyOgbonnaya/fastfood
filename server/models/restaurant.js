"use strict";
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      delivTime: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      website: {
        type: DataTypes.STRING
      },
      daysOpen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      hrsOpen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      coverPhoto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
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
