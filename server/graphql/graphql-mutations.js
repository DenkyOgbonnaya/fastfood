const graphql = require("graphql");
const restaurantType = require("./graphql-types/restaurant-type");
const menuType = require("./graphql-types/menu-type");
const mealType = require("./graphql-types/meal-type");
const userType = require("./graphql-types/user-type");
const { createUser, loginUser } = require("../user").userController();

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql;

// define mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: {
      type: userType,
      args: {
        fullname: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: async (parent, args) => {
        try {
          const token = await createUser(args);
          return {token};
        } catch (err) {
          throw err;
        }
      }
    },
    login: {
      type: userType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: async (parent, args, context) => {
        try {
          const token = await loginUser(args);
          return {token}
        } catch (err) {
          throw err;
        }
      }
    },
    addRestaurant: {
      type: restaurantType,
      args: {
        name: { type: GraphQLString },
        city: { type: GraphQLString },
        address: { type: GraphQLString },
        delivTime: { type: GraphQLString },
        daysOpen: { type: GraphQLString },
        hrsOpen: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
        description: { type: GraphQLString },
        coverPhoto: { type: GraphQLString },
        ownerId: { type: GraphQLID }
      },
      resolve(parent, args) {}
    },
    addMenu: {
      type: menuType,
      args: {
        name: { type: GraphQLString },
        photo: { type: GraphQLString },
        restuarantId: { type: GraphQLID }
      }
    },
    addMeal: {
      type: mealType,
      args: {
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        menuId: { type: GraphQLID }
      }
    }
  }
});

module.exports = Mutation;
