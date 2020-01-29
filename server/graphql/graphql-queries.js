const graphql = require("graphql");
const restaurantType = require("./graphql-types/restaurant-type");
const menuType = require("./graphql-types/menu-type");

// declares Graphql types
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
} = graphql;

// defines a Graphql root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restuarant: {
      type: restaurantType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {}
    },
    menu: {
      type: menuType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {}
    },
    restuarants: {
      type: new GraphQLList(restaurantType),
      resolve(parent, args) {}
    }
  }
});

module.exports = RootQuery;
