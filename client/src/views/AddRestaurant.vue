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
            Add Restaurant
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <section>
        <h4>Add Restaurant</h4>
        <form @submit.prevent="handleSubmit" class="basic-info">
          <div class="form-group">
            <div v-if="errorMessage" class="alert alert-danger">
              {{ errorMessage }}
            </div>
            <h5>Basic Info</h5>
            <label for="name">Restaurant name*</label>
            <input
              type="text"
              name="name"
              v-model="restaurant.name"
              placeholder="Enter restaurant name"
              class="form-control"
              required
            />
            <label for="city">City*</label>
            <input
              type="text"
              name="city"
              v-model="restaurant.city"
              placeholder="Enter city"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <h5>Contact Info*</h5>
            <label for="address">Address*</label>
            <input
              type="text"
              name="address"
              v-model="restaurant.address"
              placeholder="Enter the address"
              class="form-control"
              required
            />
            <label for="email">Email address*</label>
            <input
              type="email"
              name="email"
              v-model="restaurant.email"
              placeholder="Eestaurant Email Address"
              class="form-control"
              required
            />
            <label for="phone">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              v-model="restaurant.phone"
              placeholder="Enter phone"
              class="form-control"
              required
            />
            <label for="restWebsite">Restaurant website</label>
            <input
              type="text"
              name="website"
              v-model="restaurant.website"
              placeholder="Restaurant website"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <h5>Timings*</h5>
            <label for="daysOpen">Opening days*</label>
            <input
              type="text"
              name="daysOpen"
              v-model="restaurant.daysOpen"
              placeholder="eg Mon-Sun"
              class="form-control"
              required
            />
            <label for="hoursOpen">Opening hours*</label>
            <input
              type="text"
              name="hrsOpen"
              v-model="restaurant.hrsOpen"
              placeholder="eg 6am-12pm"
              class="form-control"
              required
            />
            <label for="hoursOpen">Average delivery time*</label>
            <input
              type="text"
              name="delivTime"
              v-model="restaurant.delivTime"
              placeholder="eg 30mins"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="coverPhoto">Brief Description of services*</label>
            <textarea
              name="description"
              v-model="restaurant.description"
              class="form-control"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="coverPhoto">Add a logo</label>
            <input
              type="file"
              name="coverPhoto"
              class="form-control"
              accept="image/*"
              @change="handleFIleChange"
              required
            />
          </div>
          <button class="btn btn-danger text-ligth" :disabled="isLoading">
            <span v-if="!isLoading">Next</span>
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
    <AppModal v-if="showAddMenuModal" @close="closeAddMenuModal">
      <template v-slot:body>
        <AddMenu
          :restaurantId="restaurantId"
          @finish="toggleShowAddMenuModal"
        />
      </template>
    </AppModal>
  </div>
</template>

<script>
import HowToPartner from "@/components/HowToPartner";
import AddMenu from "@/components/restaurants/AddMenu";
import AppModal from "@/components/AppModal";
import { mapActions } from "vuex";
export default {
  name: "addRestauarant",
  data () {
    return {
      restaurant: {},
      showAddMenuModal: false,
      restaurantId: "",
      isLoading: false,
      errorMessage: ""
    };
  },
  components: {
    HowToPartner,
    AddMenu,
    AppModal
  },
  methods: {
    ...mapActions([
      "handleRestaurantAdd",
      "handleAuthErrSet",
      "handleIsLoadingToggle"
    ]),
    async handleSubmit () {
      this.toggleIsLoading();
      this.setErrorMessage(null);
      const inputErrors = this.validateInputs();

      if (inputErrors.length) {
        this.setErrorMessage(inputErrors[0]);
        this.toggleIsLoading();
      } else {
        const data = this.restaurant;
        await this.addRestaurant(data);
      }
    },
    async addRestaurant (credentials) {
      try {
        const { id } = await this.handleRestaurantAdd(credentials);
        if (id) {
          this.toggleIsLoading();
          this.addRestaurantMenu(id);
        }
      } catch (err) {
        this.setErrorMessage(err.message);
        this.toggleIsLoading();
      }
    },
    handleFIleChange ({ target }) {
      this.restaurant.coverPhoto = target.files[0];
    },
    addRestaurantMenu (restaurantId) {
      this.restaurantId = restaurantId;
      this.toggleShowAddMenuModal();
    },
    toggleShowAddMenuModal () {
      this.showAddMenuModal = !this.showAddMenuModal;
    },
    validateInputs () {
      const errors = [];

      if (this.restaurant.name.length < 3) errors.push("name is too short");
      if (!this.restaurant.city) errors.push("city is required");
      if (!this.restaurant.description) errors.push("description is required");
      if (this.restaurant.address.length < 10) {
        errors.push("address must be 10 characters min");
      }
      if (this.restaurant.phone < 11) errors.push("valid phone number is required");
      if (!this.restaurant.delivTime) errors.push("city is required");
      if (!this.restaurant.daysOpen) errors.push("opening days is required");
      if (!this.restaurant.hrsOpen) errors.push("please enter opening hours");

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
    },
    closeAddMenuModal () {
      // do nothing
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
    margin-bottom: 3%;
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
}
</style>
