const graphql = require("graphql");
const menuType = require("./menu-type");

// declares Graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

// defines a Restaurant object type
const RestaurantType = new GraphQLObjectType({
  name: "Restaurant",
  fields: () => ({
    id: { type: GraphQLID },
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
    ownerId: { type: GraphQLID },
    menu: {
      type: new GraphQLList(menuType),
      resolve(parent, args) {}
    }
  })
});

module.exports = RestaurantType;
