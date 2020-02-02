const { addMealExtra, deleteMealExtra, editMealExtra } = require("../../mealExtra/mealExtra-service")();

const mealExtraResolver = {
  Mutation: {
    addMealExtra: async (parent, args) => {
      try {
        // add the meal extra to db
        return await addMealExtra(args);
      } catch (err) {
        throw err;
      }
    },
    editMealExtra: async (parent, args) => {
      try {
        return await editMealExtra(args.id, args);
      } catch (err) {
        throw err;
      }
    },
    deleteMeal: async (parent, { id }) => {
      try {
        const deleted = await deleteMealExtra(id);
        return deleted ? true : false;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = mealExtraResolver;
