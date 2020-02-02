"use strict";
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const schemas = require("./server/graphql/schemas");
const resolvers = require("./server/graphql/resolvers");

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers
});
server.applyMiddleware({ app, path: "/graphql" });
app.listen({ port }, () => {
  console.log(`Server on http://localhost:${port}/graphql`);
});
