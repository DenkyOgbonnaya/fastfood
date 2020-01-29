const graphql = require("graphql");

// declares Graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

// defines a User object type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    phone: { type: GraphQLString },
    location: { type: GraphQLString },
    token: { type: GraphQLString }
  })
});

module.exports = UserType;
