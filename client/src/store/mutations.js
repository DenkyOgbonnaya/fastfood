export default {
  signup: (state, userData) => {},
  toggleAuthModal: state => {
    state.showAuthModal = !state.showAuthModal;
  },
  toggleIsLoading: state => {
    state.isLoading = !state.isLoading;
  },
  setAuthError: (state, err) => {
    state.authError = err;
  },
  setCurrentUser: (state, currentUser) => {
    state.currentUser = currentUser;
  },
  removeCurrentUser: state => {
    state.currentUser = null;
  },
  addRestaurants: (state, { rows, count }) => {
    state.restaurants = rows;
    state.restaurantsCount = count
  },
  addRestaurant: (state, restaurant) => {
    state.restaurant = restaurant;
  },
  updateCarts: (state, { restaurantId, cart }) => {
    const updatedCarts = {
      ...state.carts,
      [restaurantId]: cart
    };
    state.carts = updatedCarts;
  },
  updateMealQty: (state, { restaurantId, mealId, qty }) => {
    let cart = state.carts[restaurantId];
    const updatedMeals = cart.map(item =>
      item.id === mealId
        ? Object.assign({}, item, { qty })
        : item
    );
    const updatedCarts = {
      ...state.carts,
      [restaurantId]: updatedMeals
    };
    state.carts = updatedCarts;
  },
  emptyCart: (state, restaurantId) => {
    const updatedCarts = {
      ...state.carts,
      [restaurantId]: []
    };
    state.carts = updatedCarts;
  },
  searchRestaurant: (state, { rows, count }) => {
    state = {
      ...state,
      restaurants: rows,
      restaurantsCount: count
    }
  },
  addMenus: (state, menus) => {
    state.menus = menus;
  }
};
