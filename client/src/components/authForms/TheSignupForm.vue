<template>
  <div class="wrapper">
    <section>
      <figure>
        <img src="~@/assets/images/auth_img2.jpg" alt="" />
      </figure>
    </section>
    <section>
      <h3>FastFood</h3>
      <form @submit.prevent="handleSubmit">
        <div v-if="authError" class="alert alert-danger">
          {{ authError | sliceErr }}
        </div>
        <input
          type="text"
          name="fullname"
          v-model="fullname"
          required
          placeholder="Full name"
          class="form-control"
        />
        <input
          type="emai"
          name="email"
          v-model="email"
          required
          placeholder="Enter email address"
          class="form-control"
        />
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Enter password"
          class="form-control"
        />
        <input type="checkbox" name="tc" v-model="isTermsAgreed" />
        <label for="tc">I agree to FastFood terms and conditions</label>
        <button
          class="btn btn-warning"
          :disabled="!isTermsAgreed || isLoading"
        >
          <span v-if="!isLoading">Sign Up</span>
          <div
            v-if="isLoading"
            class="spinner-border text-light spinner-border-sm"
            role="status"
          >
            <span class="sr-only">loading...</span>
          </div>
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { decode } from "jsonwebtoken";
export default {
  name: "theSignupForm",
  data () {
    return {
      fullname: "",
      email: "",
      password: "",
      isTermsAgreed: false
    };
  },
  computed: {
    ...mapState(["isLoading", "authError"])
  },
  methods: {
    ...mapActions([
      "handleSignup",
      "handleAuthErrSet",
      "handleIsLoadingToggle",
      "handleSetCurrUser",
      "handleAuthModalToggle"
    ]),
    async handleSubmit () {
      this.handleIsLoadingToggle();
      this.handleAuthErrSet(null);
      const inputErrors = this.validateInputs();

      if (inputErrors.length) {
        this.handleAuthErrSet(inputErrors[0]);
        this.handleIsLoadingToggle();
      } else {
        await this.signupUser();
      }
    },
    async signupUser () {
      const userData = {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      };
      try {
        const token = await this.handleSignup(userData);
        localStorage.token = token;
        const { currentUser } = decode(token);
        this.handleSetCurrUser(currentUser);
        this.handleIsLoadingToggle();
        this.handleAuthModalToggle();
      } catch (err) {
        this.handleAuthErrSet(err.message);
        this.handleIsLoadingToggle();
      }
    },
    validateInputs () {
      const errors = [];

      if (this.fullname.length < 5) errors.push("Fullname is too short");
      if (!this.email) errors.push("email is required");
      if (this.password.length < 5) errors.push("password must be 5 characters min");

      return errors;
    }
  },
  filters: {
    sliceErr (err) {
      if (err.startsWith("Graph")) {
        return err.slice(8);
      }
      return err;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  @include desktop() {
    flex-direction: row;
  }
  section:first-child {
    figure img {
      max-width: 100%;
      height: 100%;
      font-size: 12px;
    }
  }
  section:last-child {
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  form {
    input {
      margin: 10% 0;
    }
    input[type="checkbox"] {
      margin-right: 10px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
