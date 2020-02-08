<template>
  <div class="order-flow-container">
    <div class="order-flow-card">
      <div class="card-img-wrapper">
        <img src="~@/assets/images/img_1.svg" alt="burger" />
      </div>
      <div class="order-flow-card-description">
        <h5>Choose Your City</h5>
        <p>
          Select your location and find meals from your favorite restaurants
        </p>
      </div>
    </div>

    <div class="order-flow-card">
      <div class="card-img-wrapper">
        <img src="~@/assets/images/img_2.svg" alt="burger" />
      </div>
      <div class="card-description">
        <h5>Order Meals Easily</h5>
        <p>
          You can add meals from different restaurants into a single shopping
          cart
        </p>
      </div>
    </div>

    <div class="order-flow-card">
      <div class="card-img-wrapper">
        <img src="~@/assets/images/img_3.svg" alt="burger" />
      </div>
      <div class="order-flow-card-description">
        <h5>Delivery</h5>
        <p>
          Relax as we process your order and get it delivered to your doorstep
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderFlow'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.order-flow-container {
  background: $warning-color;
  padding: 20% 5px;
  .order-flow-card {
    display: flex;
    padding: 10px;
    .card-img-wrapper {
      border: 1px solid #ffffffff;
      width: 100px;
      height: 80px;
      padding: 20px;
      margin-right: 10px;
      img {
        max-height: 40px;
        max-width: 40px;
      }
    }
    & div:last-child {
      padding: 5px;
      h5 {
        font-weight: map-get($font-weights, bold );
        color: #212121;
        text-align: left;
      }
      p {
        font-size: 13px;
        text-align: left;
      }
    }
  }
@include desktop() {
  display: flex;
  justify-content: space-around;
  padding: 5%;
}
}
</style>
