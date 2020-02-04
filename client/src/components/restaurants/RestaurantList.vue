<template>
    <div class="container">
        <div
          class="row"
        >
            <div
              class="col-sm-12 col-md-6 col-lg-3"
              v-for="restaurant in restaurants"
              :key="restaurant.id"
            >
              <RestaurantCard :restaurant="restaurant"/>
            </div>
        </div>
        <AppPagination />
    </div>
</template>

<script>
import RestaurantCard from './RestaurantCard'
import AppPagination from '../AppPagination'
export default {
  name: 'RestaurantList',
  components: {
    RestaurantCard,
    AppPagination
  },
  props: {
    restaurants: Array
  },
  computed: {
    isRestuarants () {
      return this.restaurants.length
    }
  }
}
</script>
