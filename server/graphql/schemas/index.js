const { gql } = require("apollo-server-express");
const userSchema = require("./user");
const restaurantSchema = require("./restaurant");
const menuSchema = require("./menu");
const mealSchema = require("./meal");
const mealExtraSchema = require("./mealExtra");

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;
module.exports = [
  linkSchema,
  userSchema,
  restaurantSchema,
  menuSchema,
  mealSchema,
  mealExtraSchema
];
