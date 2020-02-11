<template>
  <div>
    <header class="header">
      <h4>My Restaurants</h4>
    </header>
    <main>
      <RestaurantList :restaurants="getRestaurants" />
    </main>
  </div>
</template>
<script>
import RestaurantList from "./RestaurantList";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "myRestaurants",
  data () {
    return {
      restaurantList: []
    };
  },
  components: {
    RestaurantList
  },
  mounted () {
    this.handleGetUserRestaurants();
  },
  computed: {
    ...mapGetters(["getRestaurants"])
  },
  methods: {
    ...mapActions(["handleGetUserRestaurants"])
  }
};
</script>
