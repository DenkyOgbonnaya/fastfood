"use strict";
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const schemas = require("./server/graphql/schemas");
const resolvers = require("./server/graphql/resolvers");
const { verifyToken } = require("./server/utils");

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    const currentUser  = await verifyToken(token) || " ";
    console.log(currentUser, 'lll');
    
    return {
      currentUser
    };
  }
});
server.applyMiddleware({ app, path: "/graphql" });
app.listen({ port }, () => {
  console.log(`Server on http://localhost:${port}/graphql`);
});
