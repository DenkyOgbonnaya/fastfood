"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Meals", "menuId", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.changeColumn("Meals", "price", {
        type: Sequelize.DECIMAL,
        allowNull: true,
      }),
      queryInterface.addColumn("Meals", "restaurant", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("Meals", "menu", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("Meals", "category", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Meals", "photo", {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Meals", "menuId", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.changeColumn("Meals", "price", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.removeColumn("Meals", "restaurant"),
      queryInterface.removeColumn("Meals", "menu"),
      queryInterface.removeColumn("Meals", "category"),
      queryInterface.removeColumn("Meals", "photo"),
    ]);
  },
};
