export default {
  currentUser: null,
  restaurants: [],
  restaurant: null,
  restaurantsCount: 4,
  carts: localStorage.carts || {},
  showAuthModal: false,
  isLoading: false,
  authError: ""
};
