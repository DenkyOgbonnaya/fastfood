export default {
  currentUser: null,
  restaurants: [],
  menus: [],
  restaurant: null,
  restaurantsCount: 4,
  carts: localStorage.carts || {},
  showAuthModal: false,
  isLoading: false,
  authError: ""
};
