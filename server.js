"use strict";

const express = require("express");
const cors = require("cors");
const graphqlHTTP = require('express-graphql');
const schema = require('./server/graphql/graphql-schema')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({ credentials: true }));

// Graphql api endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, err => {
  if (!err) console.log(`Server running on port ${PORT}`);
});
