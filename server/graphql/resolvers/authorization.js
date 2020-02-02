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

module.exports = {
  isAuthenticated,
  isRestaurantOwner
};
