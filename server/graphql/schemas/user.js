const { gql } = require("apollo-server-express");

const userSchema = gql`
  extend type Query {
    users: [User!],
    user(id: ID!): User
  },
  extend type Mutation {
    signup(fullname: String!, email: String!, password: String!): Token,
    login(email: String!, password: String!): Token!
  },

  type User {
    id: ID!
    fullname: String!
    email: String!
    role: String!
    phone: String
    location: String
    token: String
  }
  type Token {
    token: String
  }
`;
module.exports = userSchema
