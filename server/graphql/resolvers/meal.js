const {
  addMeal,
  deleteMeal,
  editMeal
} = require("../../meals/meals-service")();
const { getMealExtra } = require("../../mealExtra/mealExtra-service")();

const mealResolver = {
  Mutation: {
    addMeal: async (parent, args) => {
      try {
        // add the meal to db
        return await addMeal(args);
      } catch (err) {
        throw err;
      }
    },
    editMeal: async (parent, args) => {
      try {
        return await editMeal(args.id, args);
      } catch (err) {
        throw err;
      }
    },
    deleteMeal: async (parent, { id }) => {
      try {
        const deleted = await deleteMeal(id);
        return deleted ? true : false;
      } catch (err) {
        throw err;
      }
    }
  },
  Meal: {
    extras: async ({ id }) => {
      try {
        // get extra meals in meal with given id
        return await getMealExtra(id);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = mealResolver;
