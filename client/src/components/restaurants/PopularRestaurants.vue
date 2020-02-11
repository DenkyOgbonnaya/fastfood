<template>
    <article v-if="getRestaurants.length">
      <header>
        <h5>Popular Restaurants</h5>
      </header>
        <section
          v-for="restaurant in getRestaurants"
          :key="restaurant._id"
        >
           <figure class="restaurant-img">
               <img :src="restaurant.coverPhoto" alt="restaurant">
           </figure>
           <div class="details">
               <h6>{{restaurant.name}}</h6>
               <small>{{restaurant.address}}</small>
               <div class="rating text-muted">Rating: <span>4.5</span></div>
           </div>
        </section>
    </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'popularRestaurants',
  mounted () {
    const paginationOptions = {
      page: 1,
      limit: 4
    };
    this.handleGetRestaurants(paginationOptions);
  },
  computed: {
    ...mapGetters(["getRestaurants"])
  },
  methods: {
    ...mapActions(["handleGetRestaurants"])
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

  article {
    padding: 5px;
    header h5 {
      font-weight: bold;
      margin-bottom: map-get($margins, bottom );
      margin-top: map-get($margins, top );
    }
    section {
      display: flex;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 5px;
      height: 90px;
      .restaurant-img {
        height: 100%;
        img {
          width:80px;
          height: 100%;
          margin-right: 5px;
        }
      }
      .details .rating span {
        background: #f8cc06;
        max-height: 20px;
        max-width: 30px;
        border-radius: 7px;
        padding: 2px;
        color: $light-color;
        font-size: 12px;
      }
    }
  }
</style>
