const { Meal, Extra } = require("../models");
const { UserInputError } = require("apollo-server-express");

const mealService = () => {
  const addMeal = async meal => {
    try {
      const newMeal = await Meal.create(meal);
      let extras = []
      if(meal.extras){
        extras = JSON.parse(meal.extras)
      }
      for(let extra of extras){
        await Extra.create({
          name: extra.name,
          price: extra.price,
          mealId: newMeal.id
        })
      }
      return newMeal
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
