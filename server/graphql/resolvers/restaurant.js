const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated, isRestaurantOwner } = require("./authorization");
const {
  getSingle,
  getAll,
  add,
  deleteOne,
  editOne,
  searchRestaurants,
  getUsers
} = require("../../restaurant").restaurantService();
const { getRestaurantMenu } = require("../../menu/menu-service")();
const uploader = require("../../configs/cloudinary-config");
const { uploadPhoto } = require("../../utils");
const { getUser } = require("../../user").userController();

const restaurantResolver = {
  Query: {
    restaurant: async (parent, { name }) => {
      // get restaurant with given id
      try {
        return await getSingle(name);
      } catch (err) {
        throw err;
      }
    },
    restaurants: async (parent, args) => {
      // get all restaurants
      try {
        const { rows, count } = await getAll(args);

        return {
          rows,
          count
        };
      } catch (err) {
        throw err;
      }
    },
    search: async (parent, { search }) => {
      try {
        const { rows, count } = await searchRestaurants(search);
        return { rows, count };
      } catch (err) {
        throw new Error(err.message);
      }
    },
    userRestaurants: async (parent, args, { currentUser }) => {
      // get all restaurants that belongs to currentUser
      try {
        const { rows, count } = await getUsers(currentUser.id, args);

        return {
          rows,
          count
        };
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    registerRestaurant: combineResolvers(isAuthenticated, async (parent, args, { currentUser }) => {
      try {
        // gets the cover photo url
        console.log(args);
        
        const coverPhoto = await uploadPhoto(args.coverPhoto, uploader);
        const newRestaurant = { ...args, coverPhoto, ownerId: currentUser.id };

        // add the new restaurant to db
        return await add(newRestaurant);
      } catch (err) {
        throw err;
      }
    }),
    editRestaurant: combineResolvers(
      isAuthenticated,
      isRestaurantOwner,
      async (parent, args) => {
        try {
          return await editOne(args.id, args);
        } catch (err) {
          throw err;
        }
      }
    ),
    deleteRestaurant: combineResolvers(
      isAuthenticated,
      isRestaurantOwner,
      async (parent, { id }) => {
        try {
          const deleted = await deleteOne(id);
          return deleted ? true : false;
        } catch (err) {
          throw err;
        }
      }
    )
  },
  Restaurant: {
    menu: async ({ id }) => {
      // get menu items with restaurantId parent.id
      try {
        return await getRestaurantMenu(id);
      } catch (err) {
        throw err;
      }
    },
    owner: async ({ id }) => {
      // get user  with restaurantId parent.id
      try {
        return await getUser(id);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = restaurantResolver;
