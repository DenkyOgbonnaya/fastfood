<template>
  <div class="wrapper">
    <header class="header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink class="text-danger" to="/">Home</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink class="text-danger" to="/become-a-partner"
              >Become a partner</RouterLink
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Add Driver
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <section>
        <h4>Add River</h4>
        <figure>
          <img src="@/assets/images/defavatar.png" alt="user-photo" />
          <div class="caption" v-if="currentUser">
            {{ currentUser.fullname }}
          </div>
        </figure>
        <h5>Basic Info</h5>
        <form @submit.prevent="handleSubmit">
          <div v-if="errorMessage" class="alert alert-danger">
            {{ errorMessage }}
          </div>
          <label for="city">City*</label>
          <input
            type="text"
            name="city"
            v-model="driver.city"
            placeholder="Enter city"
            class="form-control"
            required
          />
          <label for="address">Address*</label>
            <input
              type="text"
              name="address"
              v-model="driver.address"
              placeholder="Enter the address"
              class="form-control"
              required
            />
          <h5>Contact Info*</h5>
          <label for="email">Email address*</label>
          <input
            type="email"
            name="email"
            v-model="driver.email"
            placeholder="Enter Email Address"
            class="form-control"
            required
          />
          <label for="phone">Phone Number*</label>
          <input
            type="text"
            name="phone"
            v-model="driver.phone"
            placeholder="Enter phone"
            class="form-control"
            required
          />
          <h5>Timings*</h5>
          <label for="daysOpen">Operating days*</label>
          <input
            type="text"
            name="operateDays"
            v-model="driver.operateDays"
            placeholder="eg Mon-Sun"
            class="form-control"
            required
          />
          <label for="hoursOpen">Operating hours*</label>
          <input
            type="text"
            name="operateHrs"
            v-model="driver.operateHrs"
            placeholder="eg 6am-12pm"
            class="form-control"
            required
          />
          <button class="btn btn-danger text-ligth" :disabled="isLoading">
            <span v-if="!isLoading">Add Driver</span>
            <div
              v-else
              class="spinner-border text-light  spinner-border-sm"
              role="status"
            >
              <span class="sr-only">loading...</span>
            </div>
          </button>
        </form>
      </section>
      <section>
        <HowToPartner />
      </section>
    </main>
  </div>
</template>

<script>
import HowToPartner from "@/components/HowToPartner";
import { mapState, mapActions } from "vuex";
export default {
  name: "addDriver",
  data () {
    return {
      driver: {},
      isLoading: false,
      errorMessage: ""
    };
  },
  components: {
    HowToPartner
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    ...mapActions(["handleDriverAdd"]),
    async handleSubmit () {
      this.toggleIsLoading();
      this.setErrorMessage(null);
      const inputErrors = this.validateInputs();
      if (inputErrors.length) {
        this.setErrorMessage(inputErrors[0]);
        this.toggleIsLoading();
      } else {
        const data = this.driver;
        await this.addDriver(data);
      }
    },
    async addDriver (credentials) {
      try {
        const { id } = await this.handleDriverAdd(credentials);
        if (id) {
          this.toggleIsLoading();
          this.$noty.success("Driver registered!, wait for confirmation");
        }
      } catch (err) {
        this.setErrorMessage(err.message);
        this.toggleIsLoading();
      }
    },
    validateInputs () {
      const errors = [];

      if (!this.driver.city) errors.push("city is required");
      if (this.driver.address.length < 10) {
        errors.push("address must be 10 characters min");
      }
      if (this.driver.phone < 11) errors.push("valid phone number is required");
      if (!this.driver.operateDays) errors.push("operating days is required");
      if (!this.driver.operateHrs) errors.push("please enter operating hours");

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
      const el = this.$el.getElementsByClassName("header")[0];

      if (el) {
        el.scrollIntoView();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
main {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  padding: 2%;
  @include desktop() {
    flex-direction: row;
    justify-content: space-around;
  }
  & section:first-child ul {
    padding: 0;
    list-style-type: none;
    li {
      display: inline;
      margin-right: 10px;
    }
  }
  section:first-child {
    figure {
      text-align: center;
      img {
        max-width: 80px;
        max-height: 80px;
        clip-path: circle(50%);
      }
      .caption {
        color: $danger-color;
        font-weight: bold;
      }
    }
    h4 {
      font-weight: bold;
    }
    h5 {
      margin-top: 7%;
      font-weight: bold;
    }
    label {
      margin: 2% 0;
    }
    input[type="checkbox"],
    input[type="radio"] {
      margin-right: 5px;
    }
  }
  .timings {
    margin-top: 5%;
  }
  .btn {
    margin-top: 5%;
  }
}
</style>
