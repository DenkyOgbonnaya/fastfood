"use strict";
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const schemas = require("./server/graphql/schemas");
const resolvers = require("./server/graphql/resolvers");
var history = require("connect-history-api-fallback");
const path = require('path');

const { verifyToken } = require("./server/utils");

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    const currentUser = (await verifyToken(token)) || " ";

    return {
      currentUser,
    };
  },
});
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/dist/index.html"));
});
server.applyMiddleware({ app, path: "/graphql" });
app.listen({ port }, () => {
  console.log(`Server on http://localhost:${port}/graphql`);
});
