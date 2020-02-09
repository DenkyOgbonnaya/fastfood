const { ForbiddenError } = require("apollo-server");
const { skip } = require("graphql-resolvers");
const { getSingle } = require("../../restaurant").restaurantService();

const isAuthenticated = (parent, args, { currentUser }) =>
  currentUser ? skip : new ForbiddenError("Not authenticated as user.");

const isRestaurantOwner = async (parent, { id }, { currentUser }) => {
  const restaurant = await getSingle(id);
  if (restaurant.ownerId === currentUser.id) return skip;
  new ForbiddenError("Not authenticated as restaurant owner.");
};
const isDriverOwner = async (parent, { id }, { currentUser }) => {
  const driver = await getSingle(id);
  if (driver.ownerId === currentUser.id) return skip;
  new ForbiddenError("Not authenticated as driver owner.");
};
module.exports = {
  isAuthenticated,
  isRestaurantOwner,
  isDriverOwner
};
