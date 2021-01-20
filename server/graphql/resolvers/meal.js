const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("./authorization");
const {
  addMeal,
  deleteMeal,
  editMeal
} = require("../../meals/meals-service")();
const { getMealExtra } = require("../../mealExtra/mealExtra-service")();
const uploader = require("../../configs/cloudinary-config");
const { uploadPhoto } = require("../../utils");

const mealResolver = {
  Mutation: {
    addMeal: combineResolvers(isAuthenticated, async (parent, args) => {
      try {
         // gets the meal photo url
         console.log(args);
        
         const photo = await uploadPhoto(args.photo, uploader);
         const meal = { ...args, photo };
        // add the meal to db
        return await addMeal(meal);
      } catch (err) {
        throw err;
      }
    }),
    editMeal: combineResolvers(isAuthenticated, async (parent, args) => {
      try {
        return await editMeal(args.id, args);
      } catch (err) {
        throw err;
      }
    }),
    deleteMeal: combineResolvers(isAuthenticated, async (parent, { id }) => {
      try {
        const deleted = await deleteMeal(id);
        return deleted ? true : false;
      } catch (err) {
        throw err;
      }
    })
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
