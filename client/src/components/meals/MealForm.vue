<template>
  <div class="wrapper">
    <h4>Add Meal</h4>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="restaurant">Select Restuarant*</label>
            <select
              name="restaurant"
              id="restaurant"
              class="form-control"
              v-model="restaurant"
              @change="getRestaurantMenu($event)"
            >
             <option v-for="rest in getRestaurants" :key="rest.id" :value="rest.id" >{{rest.name}}</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="menu">Select Menu*</label>
            <select
              name="menu"
              id="menu"
              class="form-control"
              v-model="menuId"
            >
            <option v-for="menu in menus" :key="menu.id" :value="menu.id" >{{menu.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="category">Select Category*</label>
            <select
              name="category"
              id="category"
              class="form-control"
              v-model="category"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="name">Meal Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Meal name"
              class="form-control"
              required
              v-model="name"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="price">Meal Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="N0"
              class="form-control"
              required
              v-model="price"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="coverPhoto">Meal Photo</label>
            <input
              type="file"
              name="coverPhoto"
              class="form-control"
              accept="image/*"
              @change="handleFIleChange"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="extras">Add Extras</label>
        <MealExtraForm v-on:passExtras="handleExras" @removeExtras="removeExras" />
      </div>
      <button type="submit" class="btn btn-danger text-ligth" :disabled="loading">
            <span v-if="!loading">Add Meal</span>
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
import MealExtraForm from "./MealExtraForm";
import { mapState, mapActions, mapGetters } from "vuex"
export default {
  name: "mealForm",
  data () {
    return {
      restaurant: "",
      menuId: null,
      category: "",
      name: "",
      price: "",
      extras: [],
      photo: "",
      loading: false
    };
  },
  components: {
    MealExtraForm
  },
  mounted () {
    this.handleGetUserRestaurants();
  },
  methods: {
    ...mapActions([
      "handleGetUserRestaurants",
      "handleGetRestaurant",
      "handleGetRestaurantMenus",
      "handleAddMeal"]),
    async handleSubmit () {
      this.loading = true;
      const mealData = {
        category: this.category,
        name: this.name,
        price: Number(this.price),
        extras: JSON.stringify(this.extras),
        restaurant: this.restaurant,
        menu: this.menuId,
        photo: this.photo
      };
      console.log(mealData);

      try {
        await this.handleAddMeal(mealData);
        this.loading = false
      } catch (err) {
        this.loading = false
      }
    },
    handleExras (extra) {
      const updatedExtras = [...this.extras, extra];
      this.extras = updatedExtras;
    },
    removeExras (index) {
      console.log(index, "extra")
      this.extras = this.extras.filter((meal, mealIndex) => mealIndex !== index)
      console.log(this.extras.length)
    },
    getRestaurantMenu (e) {
      console.log("REST", e.target.value)
      this.handleGetRestaurantMenus(e.target.value);
    },
    handleFIleChange ({ target }) {
      this.photo = target.files[0];
    }
  },
  computed: {
    ...mapState(["menu", "menus"]),
    ...mapGetters(["getRestaurants"])
  }
};
</script>

<style lang="scss" scoped>
form {
  padding: 2%;
  .photo-preview {
    margin-top: 2%;
    figure {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      max-width: 100px;
      max-height: 100px;
      img {
        max-width: 100%;
        height: 100%;
      }
      span {
        align-self: flex-end;
        position: relative;
        top: 10px;
        left: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
