const { Restaurant } = require("../models");
const { UserInputError } = require("apollo-server-express");

const restaurantService = () => {
  const add = async restaurant => {
    try {
      return await Restaurant.create(restaurant);
    } catch (err) {
      throw err;
    }
  };
  const getAll = async ({ limit = 4, page = 1 }) => {
    page = Number(page);
    limit = Number(limit);

    const offset = (page * limit) - limit;
    try {
      return await Restaurant.findAndCountAll({ offset, limit});
    } catch (err) {
      throw err;
    }
  };
  const getSingle = async name => {
    try {
      return await Restaurant.findOne({ where: { name } });
    } catch (err) {
      throw err;
    }
  };
  const editOne = async (id, credentials) => {
    try {
      const restaurant = await Restaurant.findOne({ where: { id } });
      if (restaurant) return await restaurant.update(credentials);
      throw new UserInputError("Restaurant not found");
    } catch (err) {
      throw err;
    }
  };
  const deleteOne = async id => {
    try {
      return await Restaurant.destroy({ where: { id } });
    } catch (err) {
      throw err;
    }
  };
  return {
    add,
    getAll,
    getSingle,
    editOne,
    deleteOne
  };
};

module.exports = restaurantService;
