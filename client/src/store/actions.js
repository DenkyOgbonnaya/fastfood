import apollo from "../apolloClient";
import { SIGN_UP_MUTATION, LOGIN_MUTATION } from "../graphql/constants";

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
  }
};
