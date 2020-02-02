'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    role: {
      type: DataTypes.ENUM('ADMIN', 'PARTNER_1', 'PARTNER_2', 'USER'),
      defaultValue: 'USER'
    },
    phone: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Restaurant, {
      foreignKey: 'ownerId',
      as: 'restaurants',
      onDelete: 'CASCADE',
    });
    User.hasOne(models.Driver, {
      foreignKey: 'ownerId',
      as: 'driver'
    })
  };
  return User;
};