export default {
  isAuthenticated: state => state.currentUser,
  getRestaurants: state => state.restaurants,
  getCarts: state => state.carts,
  getCart: state => restaurantId => state.carts[restaurantId],
  getCartTotal: state => restaurantId => {
    const cart = state.carts[restaurantId];
    const cartTotal = cart.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
    return cartTotal;
  }
};
