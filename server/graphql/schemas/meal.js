const { gql } = require("apollo-server-express");

const mealSchema = gql`
  extend type Mutation {
    addMeal(
      name: String!
      price: Int!
      menuId: ID!
      photo: Upload!
      category: String!
      restaurant: ID!
      extras: String
    ): Meal
    editMeal(id: Int!, name: String, price: Int): Meal
    deleteMeal(id: ID): Boolean
  }

  type Meal {
    id: ID!
    name: String!
    price: Int!
    menuId: ID!
    extras: [Extra]
    photo: String!
  }

  type Extra {
    id: ID
    name: String!,
    price: Int!
  }
`;
module.exports = mealSchema;
