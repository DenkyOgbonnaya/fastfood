const { gql } = require("apollo-server-express");

const restaurantSchema = gql`
  extend type Query {
    getRestaurant(id: ID!): Restaurant
    getRestaurants: [Restaurant!]
  },
  extend type Mutation {
    registerRestaurant(
      name: String!
      city: String!
      address: String!
      delivTime: String!
      daysOpen: String!
      hrsOpen: String!
      email: String!
      phone: String!
      website: String!
      description: String!
      coverPhoto: Upload!
      ownerId: ID!
    ): Restaurant,
    editRestaurant(
      id: Int!,
      name: String
      city: String
      address: String
      delivTime: String
      daysOpen: String
      hrsOpen: String
      email: String
      phone: String
      website: String
      description: String
    ): Restaurant,
    deleteRestaurant(id: ID) : Boolean
  },
  type Restaurant {
    id: ID!
    name: String!
    city: String!
    address: String!
    delivTime: String!
    daysOpen: String!
    hrsOpen: String!
    email: String!
    phone: String!
    website: String!
    description: String!
    coverPhoto: String!
    ownerId: ID!
    menu: [Menu!]
  }
`;
module.exports = restaurantSchema;
