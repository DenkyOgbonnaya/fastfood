const { gql } = require("apollo-server-express");

const mealExtraSchema = gql`
  extend type Mutation {
    addMealExtra(name: String!, price: Int!, mealId: ID!): MealExtra,
    editMealExtra(id:Int!, name: String, price: Int): MealExtra,
    deleteMealExtra(id: ID): Boolean
  },

  type MealExtra {
    id: ID!
    name: String!
    price: String!
    mealId: ID!
  }
`;
module.exports = mealExtraSchema;
