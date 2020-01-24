<template>
  <div class="card-container">
    <div class="card_body">
      <h5>Jamals Shawama</h5>
    </div>
    <div class="card_footer">
      <div class="restaurant-city">
        <span> Garki</span>
        <button class="btn btn-outline-danger btn-sm">Menu</button>
      </div>
      <div class="text-muted">
        <font-awesome-icon
          icon="shopping-cart"
          class="f-awesome"
        />
        Delivery Time: 50 min
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    restaurant: Object
  }
}
</script>

<style lang="css" scoped>
  .card-container {
      border: 1px solid #ccc;
      margin-bottom: 15px;
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
