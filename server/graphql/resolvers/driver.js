const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated, isDriverOwner } = require("./authorization");
const {
  getSingle,
  getAll,
  add,
  deleteOne,
  editOne
} = require("../../driver/driver-service")();

const driverResolver = {
  Query: {
    driver: async (parent, { id }) => {
      // get driver with given id
      try {
        return await getSingle(id);
      } catch (err) {
        throw err;
      }
    },
    drivers: async (parent, { city }) => {
      // get all driver in given city
      try {
        return await getAll(args);
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    registerDriver: combineResolvers(
      isAuthenticated,
      async (parent, args, { currentUser }) => {
        try {
          const newDriver = { ...args, name: currentUser.fullname, ownerId: currentUser.id };

          // add the new driver to db
          return await add(newDriver);
        } catch (err) {
          throw err;
        }
      }
    ),
    editDriver: combineResolvers(
      isAuthenticated,
      isDriverOwner,
      async (parent, args) => {
        try {
          return await editOne(args.id, args);
        } catch (err) {
          throw err;
        }
      }
    ),
    deleteDriver: combineResolvers(
      isAuthenticated,
      isDriverOwner,
      async (parent, { id }) => {
        try {
          const deleted = await deleteOne(id);
          return deleted ? true : false;
        } catch (err) {
          throw err;
        }
      }
    )
  }
};

module.exports = driverResolver;
