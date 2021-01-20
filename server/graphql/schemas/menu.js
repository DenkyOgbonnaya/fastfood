const { gql } = require("apollo-server-express");

const menuSchema = gql`
  extend type Query {
    getMenu(id: ID): Menu
    menus(restaurantId: ID!): [Menu]!
  },
  extend type Mutation {
    addMenu(name: String!, photo: Upload!, restaurantId: ID!): Menu,
    editMenu(id:Int!, name: String): Menu,
    deleteMenu(id: ID): Boolean
  },

  type Menu {
    id: ID!
    name: String!
    photo: String!
    restaurantId: ID!
    meals: [Meal!]
  }
`;
module.exports = menuSchema
