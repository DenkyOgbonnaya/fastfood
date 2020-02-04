<template>
  <div class="wrapper">
    <section>
      <figure>
        <img src="~@/assets/images/auth_img2.jpg" alt="" />
      </figure>
    </section>
    <section>
      <h3>FastFood</h3>
      <button class="btn btn-danger">Continue with Google</button>
      <h6>Or</h6>
      <form @submit.prevent="handleSubmit">
        <div v-if="authError" class="alert alert-danger">
          {{ authError | sliceErr }}
        </div>
        <input
          type="text"
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
        <button class="btn btn-warning" :disabled="isLoading">
          <span v-if="!isLoading">Login Now</span>
          <div
            v-if="isLoading"
            class="spinner-border text-light spinner-border-sm"
            role="status"
          >
            <span class="sr-only">loading...</span>
          </div>
        </button>
      </form>
      <div>Forgot password?</div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { decode } from "jsonwebtoken";
export default {
  name: "theLoginForm",
  data () {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["isLoading", "authError"])
  },
  methods: {
    ...mapActions([
      "handleLogin",
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
        await this.loginUser();
      }
    },
    async loginUser () {
      const userData = {
        email: this.email,
        password: this.password
      };
      try {
        const token = await this.handleLogin(userData);
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

      if (!this.email) errors.push("email is required");
      if (this.password.length < 5) errors.push("password must be min of 5 characters ");

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
  h6 {
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    padding: 10px;
  }
  h6:before,
  h6:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 1px;
    content: "\a0";
    background-color: #212121;
  }
  h6:before {
    margin-left: -50%;
    text-align: right;
  }
  form {
    input {
      margin: 10% 0;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
