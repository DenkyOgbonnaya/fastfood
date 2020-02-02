const { createUser, loginUser } = require("../../user").userController();

const userResolver = {
  Query: {
    users: (parent, args) => {},
    user: (parent, { id }, { models }) => {
      //
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
    }
  }
};

module.exports = userResolver;
