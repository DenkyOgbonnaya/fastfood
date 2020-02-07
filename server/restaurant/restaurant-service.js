const { Restaurant, Sequelize } = require("../models");
const { UserInputError } = require("apollo-server-express");
const { Op } = Sequelize;

const restaurantService = () => {
  const add = async restaurant => {
    try {
      return await Restaurant.create(restaurant);
    } catch (err) {
      throw err;
    }
  };
  const getAll = async ({ limit = 4, page = 1, order= "ASC" }) => {
    page = Number(page);
    limit = Number(limit);

    const offset = page * limit - limit;
    try {
      return await Restaurant.findAndCountAll({
        order: [["name", order]],
        offset,
        limit
      });
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
  const searchRestaurants = search => {
    try {
      const limit = 4;
      const offset = 0;
      return await = Restaurant.findAndCountAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${search}%`
              }
            },
            {
              city: {
                [Op.iLike]: `%${search}%`
              }
            }
          ]
        },
        order: [["name", "ASC"]],
        limit,
        offset
      });
    } catch (err) {
      throw err;
    }
  };
  return {
    add,
    getAll,
    getSingle,
    editOne,
    deleteOne,
    searchRestaurants
  };
};

module.exports = restaurantService;
