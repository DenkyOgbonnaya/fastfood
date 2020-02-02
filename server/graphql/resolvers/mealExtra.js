const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("./authorization");
const {
  addMealExtra,
  deleteMealExtra,
  editMealExtra
} = require("../../mealExtra/mealExtra-service")();

const mealExtraResolver = {
  Mutation: {
    addMealExtra: combineResolvers(isAuthenticated, async (parent, args) => {
      try {
        // add the meal extra to db
        return await addMealExtra(args);
      } catch (err) {
        throw err;
      }
    }),
    editMealExtra: combineResolvers(isAuthenticated, async (parent, args) => {
      try {
        return await editMealExtra(args.id, args);
      } catch (err) {
        throw err;
      }
    }),
    deleteMeal: combineResolvers(isAuthenticated, async (parent, { id }) => {
      try {
        const deleted = await deleteMealExtra(id);
        return deleted ? true : false;
      } catch (err) {
        throw err;
      }
    })
  }
};

module.exports = mealExtraResolver;
