<template>
    <div class="container">
        <div
          class="row"
        >
            <div
              class="col-sm-12 col-md-3"
              v-for="restaurant in restaurants"
              :key="restaurant._id"
            >
              <RestaurantCard :restaurant="restaurant"/>
            </div>
        </div>
    </div>
</template>

<script>
import RestaurantCard from './RestaurantCard'
export default {
  name: 'RestaurantList',
  data () {
    return {
      restaurants: [
        { _id: '1', name: 'KFC' },
        { _id: '2', name: 'KFC' },
        { _id: '3', name: 'KFC' },
        { _id: '4', name: 'KFC' }
      ]
    }
  },
  components: {
    RestaurantCard
  },
  props: {
    restaurantss: Array
  },
  computed: {
    isRestuarants () {
      return this.restaurants.length
    }
  }
}
</script>
