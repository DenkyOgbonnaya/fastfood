<template>
  <div
    class="card-container"
    @click="viewDetails(restaurant.name)"
  >
    <div
      class="card_body"
      :style="{backgroundImage:`url(${restaurant.coverPhoto})`}"
    >
      <h5>{{restaurant.name}}</h5>
    </div>
    <div class="card_footer">
      <div class="restaurant-city">
        <span>{{restaurant.city}}</span>
        <button
          class="btn btn-outline-danger btn-sm"
          @click="viewMenu(restaurant.name, $event)"
        >
          Menu
        </button>
      </div>
      <div class="text-muted">
        <font-awesome-icon
          icon="shopping-cart"
          class="f-awesome"
        />
        Delivery Time: {{restaurant.delivTime}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    restaurant: Object
  },
  methods: {
    viewMenu (restaurantName, event) {
      event.stopPropagation();
      this.$router.push(`/restaurants/${restaurantName}/menu`);
    },
    viewDetails (restaurantName) {
      this.$router.push(`/restaurants/${restaurantName}`);
    }
  }
}
</script>

<style lang="css" scoped>
  .card-container {
    border: 1px solid #ccc;
    margin-bottom: 15px;
  }
  .card-container:hover {
    cursor: pointer;
  }
  .card_body {
    height: 200px;
    background-image: url("~@/assets/images/home-banner.jpg");
    background-size: cover;
    display: flex;
  }
  .card_body>h5{
    align-self: flex-end;
    color: #ffffff;
    background: #212121;
    opacity: 0.7;
    padding: 2px;
    width: 100%;
    font-weight: bold;
  }
  .card_footer {
    height: 100px;
    padding: 20px;
  }
  .card_footer .restaurant-city{
    display: flex;
    justify-content: space-between;
  }
  .card_footer
  .restaurant-city span:first-child {
    font-weight: bold;
  }
  .card_footer div:last-child {
    margin-top: 10px;
    font-size: 12px;
  }
  .f-awesome {
    color: grey;
  }
</style>
