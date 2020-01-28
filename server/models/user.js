'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
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
  };
  return User;
};