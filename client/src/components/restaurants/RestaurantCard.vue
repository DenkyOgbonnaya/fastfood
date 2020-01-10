<template>
  <div class="card-container">
    <div class="card_body">
      <h5>Jamals Shawama</h5>
    </div>
    <div class="card_footer">
      <div>
        <span> Garki</span>
        <span> From N300</span>
      </div>
      <div class="text-muted">Delivery Time: 50 min </div>
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
      width: 100%;
      margin-bottom: 15px;
  }
  .card_body {
    height: 300px;
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
  .card_footer>div {
    display: flex;
    justify-content: space-between;
  }
  .card_footer>div span:first-child {
    font-weight: bold;
  }
  .card_footer>div span:last-child {
    color: red;
  }
  .card_footer div:last-child {
    margin-top: 20px;
  }
</style>
