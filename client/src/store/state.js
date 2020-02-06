export default {
  currentUser: null,
  restaurants: [],
  restaurant: null,
  carts: localStorage.carts || {},
  showAuthModal: false,
  isLoading: false,
  authError: ""
};
