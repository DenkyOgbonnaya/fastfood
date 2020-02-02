'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    phone: {
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
        notEmpty: true
      }
    },
    operateDays: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    operateHrs: {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
    Driver.belongsTo(models.User, {
      foreignKey: 'ownerId',
      as: 'owner',
      onDelete: 'CASCADE',
    })
  };
  return Driver;
};