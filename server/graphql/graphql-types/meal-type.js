const graphql = require("graphql");

// declares Graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql;

// defines a Restaurants menu meal object type
const MealType = new GraphQLObjectType({
  name: "Meal",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    menuId: { type: GraphQLID }
  })
});

module.exports = MealType;
