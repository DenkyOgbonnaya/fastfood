const graphql = require("graphql");
const RootQuery = require("./graphql-queries");
const Mutation = require("./graphql-mutations");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
