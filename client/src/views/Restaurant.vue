<template>
  <div class="wrapper">
    <header :style="{backgroundImage:`url(${getCoverPhoto})`}">
      <nav class="header-nav" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            restaurant
          </li>
        </ol>
      </nav>
      <div class="restaurant-intro" v-if="restaurant">
        <h1>{{restaurant.name || ''}}: Restaurant</h1>
        <p>{{restaurant.description || ''}}</p>
        <p>{{restaurant.address || ''}}</p>
      </div>
    </header>
    <main v-if="restaurant">
      <section class="restaurant-menu">
        <RestaurantMenu :menu="restaurant.menu" />
      </section>
      <section class="shopping-cart">
        <ShoppingCart :restaurantId="restaurant.id" />
      </section>
    </main>
  </div>
</template>

<script>
import RestaurantMenu from "@/components/restaurants/RestaurantMenu";
import ShoppingCart from "@/components/cart/ShoppingCart";
import { mapActions, mapState } from "vuex";
export default {
  name: "restaurant",
  components: {
    RestaurantMenu,
    ShoppingCart
  },
  mounted () {
    const restaurantName = this.$route.params.name;
    this.handleGetRestaurant(restaurantName);
  },
  methods: {
    ...mapActions(["handleGetRestaurant"])
  },
  computed: {
    ...mapState(["restaurant"]),
    getCoverPhoto () {
      return this.restaurant ? this.restaurant.coverPhoto : "~@/assets/images/home-banner.jpg";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  header {
    max-height: 400px;
    background-image: url("~@/assets/images/home-banner.jpg");
    background-size: cover;
    @include desktop() {
      height: 400px;
    }
    .restaurant-intro {
      text-align: center;
      color: $light-color;
      p {
        color: $danger-color;
      }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2%;
    @include desktop() {
      flex-direction: row;
    }
  }
}
</style>
