const graphql = require("graphql");
const mealType = require("./meal-type");

// declares Graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

// defines a Restaurant menu object type
const MenuType = new GraphQLObjectType({
  name: "Menu",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    cover: { type: GraphQLString },
    restuarantId: { type: GraphQLID },
    meals: {
      type: new GraphQLList(mealType),
      resolve(parent, args) {}
    }
  })
});

module.exports = MenuType;
