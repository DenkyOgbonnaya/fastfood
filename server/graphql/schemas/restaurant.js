const { gql } = require("apollo-server-express");

const restaurantSchema = gql`
  extend type Query {
    restaurant(name: String!): Restaurant
    restaurants(page: Int, limit: Int, order: String): RestaurantsResult!
    search(search: String!): RestaurantsResult!
    userRestaurants(page: Int, limit: Int) : RestaurantsResult!
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
      ownerId: ID
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
    owner: User!
    menu: [Menu!]
  },
  type RestaurantsResult {
    rows: [Restaurant!]
    count: Int!
  }
`;
module.exports = restaurantSchema;
