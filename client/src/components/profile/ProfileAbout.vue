<template>
  <div class="wrapper">
    <header class="header">
      <h4>About Profile</h4>
      <span @click="toggleIsEditableProfile">
        <font-awesome-icon icon="edit" style="color: grey, max-width:10px" />
        Edit Profile
      </span>
    </header>
    <form @submit.prevent="handleSubmit">
      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          v-model="user.fullname"
          placeholder="fullname"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input
          type="text"
          name="location"
          v-model="user.location"
          placeholder="Enter location"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="phone">Mobile Number</label>
        <input
          type="telephone"
          name="phone"
          v-model="user.phone"
          placeholder="Enter phone"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          name="email"
          v-model="user.email"
          placeholder="Enter email"
          class="form-control"
          disabled
        />
      </div>
      <br>
      <button
        class="btn btn-danger text-ligth"
        :disabled="isLoading"
        :hidden="!isEditableProfile"
      >
        <span v-if="!isLoading">Save</span>
        <div
          v-else
          class="spinner-border text-light  spinner-border-sm"
          role="status"
        >
          <span class="sr-only">loading...</span>
        </div>
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { decode } from "jsonwebtoken";
export default {
  name: "profileAbout",
  data () {
    return {
      user: { },
      isLoading: false,
      errorMessage: "",
      shouldEdit: false,
      isEditableProfile: false
    }
  },
  mounted () {
    this.setUser();
  },
  methods: {
    ...mapActions(["handleProfileSave", "handleSetCurrUser"]),
    setUser () {
      this.user = Object.assign({}, this.isAuthenticated); // returns the currentUser
    },
    async handleSubmit () {
      this.toggleIsLoading();
      this.setErrorMessage(null);
      const inputErrors = this.validateInputs();

      if (inputErrors.length) {
        this.setErrorMessage(inputErrors[0]);
        this.toggleIsLoading();
      } else {
        const data = this.user;
        await this.saveProfile(data);
      }
    },
    async saveProfile (credentials) {
      try {
        const { token } = await this.handleProfileSave(credentials);
        if (token) {
          this.setUpdatedCurrentUser(token);
          this.toggleIsLoading();
          this.toggleIsEditableProfile();
          this.$noty.success("Profile updated succefully");
        }
      } catch (err) {
        this.setErrorMessage(err.message);
        this.toggleIsLoading();
      }
    },
    setUpdatedCurrentUser (token) {
      localStorage.token = token;
      const { currentUser } = decode(token);
      this.handleSetCurrUser(currentUser);
    },
    toggleIsEditableProfile () {
      this.isEditableProfile = !this.isEditableProfile;
    },
    validateInputs () {
      const errors = [];
      const { fullname, location, phone } = this.user;

      if (fullname && fullname.length < 5) errors.push("fullname is too short");
      if (location && location.length < 2) errors.push("location is too short");
      if (phone && phone < 11) errors.push("valid phone number is required");

      return errors;
    },
    toggleIsLoading () {
      this.isLoading = !this.isLoading;
    },
    setErrorMessage (msg) {
      this.errorMessage = msg;
      this.scrollToTop();
    },
    scrollToTop () {
      const el = this.$el.getElementsByClassName('header')[0];

      if (el) {
        el.scrollIntoView();
      }
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2%;
    padding-right: 20px;
    span {
      color: $orange-color;
      &:hover {
        cursor: pointer;
      }
    }
  }
  form {
    .form-group {
      border: 1px solid #ccc;
      padding: 3%;
      width: 90%;
      padding: 5px;
      margin: 0;
      @include desktop() {
        width: 80%;
      }
    }
    label {
      font-weight: bold;
      font-size: 13px;
    }
    input {
      border: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
