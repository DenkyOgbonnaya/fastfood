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
  removeCurrentUser: (state) => {
    state.currentUser = null;
  },
  addRestaurants: (state, restaurants) => {
    state.restaurants = restaurants;
  }
};
