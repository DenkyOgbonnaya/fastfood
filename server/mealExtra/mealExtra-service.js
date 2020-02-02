const { Extra } = require("../models");
const { UserInputError } = require("apollo-server-express");

const mealService = () => {
  const addMealExtra = async extra => {
    try {
      return await Extra.create(extra);
    } catch (err) {
      throw err;
    }
  };
  const getMealExtra = async mealId => {
    try {
      return await Extra.findAll({ where: { mealId } });
    } catch (err) {}
  };
  const deleteMealExtra = async id => {
    try {
      return await Extra.destroy({ where: { id } });
    } catch (err) {}
  };
  const editMealExtra = async (id, credentials) => {
    try {
      const extra = await Extra.findOne({ where: { id } });
      if (extra) return await extra.update(credentials);
      throw new UserInputError("meal extra not found!");
    } catch (err) {
      throw err;
    }
  };
  return {
    addMealExtra,
    getMealExtra,
    deleteMealExtra,
    editMealExtra
  };
};

module.exports = mealService;
