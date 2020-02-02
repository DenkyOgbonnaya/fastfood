"use strict";
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const schemas = require("./server/graphql/schemas");
const resolvers = require("./server/graphql/resolvers");
const { verifyToken } = require("./server/utils");

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["x-token"];
    const { currentUser } = await verifyToken(token);

    return {
      currentUser
    };
  }
});
server.applyMiddleware({ app, path: "/graphql" });
app.listen({ port }, () => {
  console.log(`Server on http://localhost:${port}/graphql`);
});
