import apollo from "../apolloClient";
import {
  SIGN_UP_MUTATION,
  LOGIN_MUTATION,
  GET_RESTAURANTS,
  GET_RESTAURANT,
  SEARCH_RESTAURANTS,
  ADD_RESTAURANT,
  VERIFY_TOKEN,
  ADD_MENU,
  DELETE_MENU,
  ADD_DRIVER
} from "../graphql/constants";

export default {
  handleSignup: async ({ commit }, { fullname, email, password }) => {
    try {
      const { data } = await apollo.mutate({
        mutation: SIGN_UP_MUTATION,
        variables: {
          fullname,
          email,
          password
        }
      });
      return data.signup.token;
    } catch (err) {
      throw err;
    }
  },
  handleLogin: async ({ commit }, { email, password }) => {
    try {
      const { data } = await apollo.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password
        }
      });
      return data.login.token;
    } catch (err) {
      throw err;
    }
  },
  handleAuthModalToggle: ({ commit }) => {
    commit("toggleAuthModal");
  },
  handleIsLoadingToggle: ({ commit }) => {
    commit("toggleIsLoading");
  },
  handleAuthErrSet: ({ commit }, err) => {
    commit("setAuthError", err);
  },
  handleSetCurrUser: ({ commit }, currentUser) => {
    commit("setCurrentUser", currentUser);
  },
  handleLogout: ({ commit }) => {
    localStorage.removeItem("token");
    commit("removeCurrentUser");
  },
  handleGetRestaurants: async ({ commit }, { page = 1, limit = 4, order = "ASC" }) => {
    try {
      const { data } = await apollo.query({
        query: GET_RESTAURANTS,
        variables: {
          page,
          limit,
          order
        }
      });
      commit("addRestaurants", data.restaurants);
    } catch (err) {
      console.log(err);
    }
  },
  handleGetRestaurant: async ({ commit }, name) => {
    try {
      const { data } = await apollo.query({
        query: GET_RESTAURANT,
        variables: {
          name
        }
      });
      commit("addRestaurant", data.restaurant);
    } catch (err) {
      console.log(err);
    }
  },
  handleGetMenuMeals: async ({ commit }, menuId) => {
    try {
      const { data } = await apollo.query({
        query: GET_RESTAURANT,
        variables: {
          menuId
        }
      });
      commit("addRestaurant", data.restaurant);
    } catch (err) {
      console.log(err);
    }
  },
  handleUpdateCarts: ({ commit }, data) => {
    commit("updateCarts", data);
  },
  handleUpdateMealQty: ({ commit }, data) => {
    commit("updateMealQty", data);
  },
  handleEmptyCart: ({ commit }, restaurantId) => {
    commit("emptyCart", restaurantId);
  },
  handleRestaurantsSearch: async ({ commit }, search) => {
    try {
      const { data } = await apollo.query({
        query: SEARCH_RESTAURANTS,
        variables: {
          search
        }
      });
      commit("addRestaurants", data.search);
    } catch (err) {
      console.log(err);
    }
  },
  verifyToken: async (context, token) => {
    try {
      const { data } = await apollo.query({
        query: VERIFY_TOKEN,
        variables: { token }
      })
      return data.verifyToken;
    } catch (err) {
      console.log(err);
    }
  },
  handleRestaurantAdd: async ({ commit }, credentials) => {
    try {
      const { data } = await apollo.mutate({
        mutation: ADD_RESTAURANT,
        variables: credentials
      })
      return data.registerRestaurant;
    } catch (err) {
      throw err;
    }
  },
  handleMenuAdd: async ({ commit }, credentials) => {
    try {
      const { data } = await apollo.mutate({
        mutation: ADD_MENU,
        variables: credentials
      })
      return data.addMenu;
    } catch (err) {
      throw err;
    }
  },
  handleMenuRemove: async ({ commit }, id) => {
    try {
      const { data } = await apollo.mutate({
        mutation: DELETE_MENU,
        variables: { id }
      })
      return data.deleteMenu;
    } catch (err) {
      throw err;
    }
  },
  handleDriverAdd: async ({ commit }, credentials) => {
    try {
      const { data } = await apollo.mutate({
        mutation: ADD_DRIVER,
        variables: credentials
      })
      return data.registerDriver;
    } catch (err) {
      throw err;
    }
  }
};
