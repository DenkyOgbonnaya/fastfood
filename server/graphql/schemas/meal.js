const { gql } = require("apollo-server-express");

const mealSchema = gql`
  extend type Mutation {
    addMeal(name: String!, price: Int!, menuId: ID!): Meal,
    editMeal(id: Int!, name: String, price: Int): Meal,
    deleteMeal(id: ID): Boolean
  },

  type Meal {
    id: ID!
    name: String!
    price: Int!
    menuId: ID!
    extras: [MealExtra!]
  }
`;
module.exports = mealSchema
