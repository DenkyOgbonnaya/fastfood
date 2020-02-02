const {
  getSingle,
  getAll,
  add,
  deleteOne,
  editOne
} = require("../../restaurant").restaurantService();
const { getRestaurantMenu } = require("../../menu/menu-service")();
const uploader = require("../../configs/cloudinary-config");
const { uploadPhoto } = require("../../utils");

const restaurantResolver = {
  Query: {
    getRestaurant: async (parent, { id }) => {
      // get restaurant with given id
      try {
        return await getSingle(id);
      } catch (err) {
        throw err;
      }
    },
    getRestaurants: async () => {
      // get all restaurants
      try {
        return await getAll();
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    registerRestaurant: async (parent, args) => {
      try {
        // gets the cover photo url
        const coverPhoto = await uploadPhoto(args.coverPhoto, uploader);
        const newRestaurant = { ...args, coverPhoto };

        // add the new restaurant to db
        return await add(newRestaurant);
      } catch (err) {
        throw err;
      }
    },
    editRestaurant: async (parent, args) => {
      try {
        return await editOne(args.id, args);
      } catch (err) {
        throw err;
      }
    },
    deleteRestaurant: async (parent, { id }) => {
      try {
        const deleted = await deleteOne(id);
        return deleted ? true : false;
      } catch (err) {
        throw err;
      }
    }
  },
  Restaurant: {
    menu: async ({ id }) => {
      // get menu items with restaurantId parent.id
      try {
        return await getRestaurantMenu(id);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = restaurantResolver;
