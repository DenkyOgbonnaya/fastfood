const { Menu } = require("../models");
const { UserInputError } = require("apollo-server-express");

const menuService = () => {
  const addMenu = async menu => {
    console.log(menu);

    try {
      return await Menu.create(menu);
    } catch (err) {
      throw err;
    }
  };
  const getRestaurantMenu = async restaurantId => {
    try {
      return await Menu.findAll({ where: { restaurantId } });
    } catch (err) {}
  };
  const getMenu = async id => {
    try {
      return await Menu.findOne({ where: { id } });
    } catch (err) {}
  };
  const editMenu = async (id, credentials) => {
    try {
      const menu = await Menu.findOne({ where: { id } });
      if (menu) return await menu.update(credentials);
      throw new UserInputError("menu not found");
    } catch (err) {
      throw err;
    }
  };
  const deleteMenu = async id => {
    try {
      return await Menu.destroy({ where: { id } });
    } catch (err) {}
  };
  return {
    addMenu,
    getRestaurantMenu,
    getMenu,
    editMenu,
    deleteMenu
  };
};

module.exports = menuService;
