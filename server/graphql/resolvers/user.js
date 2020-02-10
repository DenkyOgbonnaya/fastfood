const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("./authorization");
const {
  createUser,
  loginUser,
  editProfile
} = require("../../user").userController();
const { verifyToken } = require("../../utils");

const userResolver = {
  Query: {
    users: (parent, args) => {},
    user: (parent, { id }, { models }) => {
      //
    },
    verifyToken: async (parent, { token }) => {
      try {
        const isValidToken = await verifyToken(token);
        if (isValidToken) return true;
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    signup: async (parent, args) => {
      try {
        const token = await createUser(args);
        return { token };
      } catch (err) {
        throw err;
      }
    },
    login: async (parent, args) => {
      try {
        const token = await loginUser(args);
        return { token };
      } catch (err) {
        throw err;
      }
    },
    editProfile: combineResolvers(
      isAuthenticated,
      async (parent, args, { currentUser }) => {
        try {
          const token = await editProfile(currentUser.id, args);
          return { token };
        } catch (err) {
          throw err;
        }
      }
    )
  }
};

module.exports = userResolver;
