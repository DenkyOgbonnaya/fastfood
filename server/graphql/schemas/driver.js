const { gql } = require("apollo-server-express");

const driverSchema = gql`
  extend type Query {
    driver(id: ID!): Driver!
    drivers(city: String!): Driver!
  }
  extend type Mutation {
    registerDriver(
      name: String
      city: String!
      address: String!
      operateDays: String!
      operateHrs: String!
      email: String!
      phone: String!
      ownerId: ID
    ): Driver
    editDriver(
      name: String
      city: String
      address: String
      operateDays: String
      operateHrs: String
      email: String
      phone: String
    ): Driver
    deleteDriver(id: ID): Boolean
  }
  type Driver {
    id: ID!
    name: String
    city: String!
    address: String!
    operateDays: String!
    operateHrs: String!
    email: String!
    phone: String!
    ownerId: ID!
  }
`;
module.exports = driverSchema;
