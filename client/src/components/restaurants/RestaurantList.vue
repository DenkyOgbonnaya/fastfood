<template>
  <div class="container">
    <div v-if="restaurants.length">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-3"
          v-for="restaurant in restaurants"
          :key="restaurant.id"
        >
          <RestaurantCard :restaurant="restaurant" />
        </div>
      </div>
      <AppPagination :pages="pages" @changePage="handlePageChange" />
    </div>
    <div v-else>No Restaurants found!</div>
  </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard";
import AppPagination from "../AppPagination";
import { mapState, mapActions } from "vuex";
export default {
  name: "restaurantList",
  data () {
    return {
      limit: 4
    };
  },
  components: {
    RestaurantCard,
    AppPagination
  },
  props: {
    restaurants: Array
  },
  methods: {
    ...mapActions(["handleGetRestaurants"]),
    handlePageChange (page) {
      const paginationOptions = {
        page,
        limit: this.limit
      };
      this.handleGetRestaurants(paginationOptions);
    }
  },
  computed: {
    ...mapState(["restaurantsCount", "isSearch"]),
    isRestuarants () {
      return this.restaurants.length;
    },
    pages () {
      const limit = this.limit;
      const restaurantsCount = this.restaurantsCount;
      return Math.ceil(restaurantsCount / limit);
    }
  }
};
</script>
