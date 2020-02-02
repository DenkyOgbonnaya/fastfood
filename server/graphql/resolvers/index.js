const userResolvers = require("./user");
const restaurantResolver = require("./restaurant");
const menuResolver = require("./menu");
const mealResolver = require("./meal");
const mealExtraResolver = require("./mealExtra");

module.exports = [
  userResolvers,
  restaurantResolver,
  menuResolver,
  mealResolver,
  mealExtraResolver
];
