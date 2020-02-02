const { Meal } = require("../models");
const { UserInputError } = require("apollo-server-express");

const mealService = () => {
  const addMeal = async meal => {
    try {
      return await Meal.create(meal);
    } catch (err) {
      throw err;
    }
  };
  const getMenuMeals = async menuId => {
    try {
      return await Meal.findAll({ where: { menuId } });
    } catch (err) {}
  };
  const editMeal = async (id, credentials) => {
    try {
      const meal = await Meal.findOne({ where: { id } });
      if (meal) return await meal.update(credentials);
      throw new UserInputError("meal not found");
    } catch (err) {
      throw err;
    }
  };
  const deleteMeal = async id => {
    try {
      return await Meal.destroy({ where: { id } });
    } catch (err) {}
  };
  return {
    addMeal,
    getMenuMeals,
    deleteMeal,
    editMeal
  };
};

module.exports = mealService;
