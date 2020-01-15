<template>
  <div class="meal-card">
    <figure class="meal-img">
      <img src="/images/banner-1.jpg" alt="" />
    </figure>
    <div class="meal-details">
      <div class="meal-name">
        <img src="/images/icon_1.svg" alt="" />
        <div class="meal-name">
          <h5>Roaster</h5>
          <h6>KFC</h6>
        </div>
      </div>
      <span class="meal-price">$50.00</span>
    </div>
    <small class="text-muted">
      <font-awesome-icon icon="shopping-cart"/>
      Delivery fee: free
    </small>
    <small class="text-muted">
      <font-awesome-icon icon="clock"/>
      Delivery time: 30min
    </small>
    <button class="btn btn-light">Add to caret</button>
  </div>
</template>

<script>
export default {
  name: 'MealCard',
  data () {
    return {
      url: '/images/banner-1.jpg'
    }
  },
  props: {
    meal: Object
  }
}
</script>

<style lang="scss" scoped>
.meal-card {
  max-width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  figure img {
    max-width: 100%;
    height: 40%;
    opacity: 0.9;
  }
  .meal-details {
    display: flex;
    justify-content: space-between;
    padding: 0px 5%;
    & .meal-name {
      display: flex;
      position: relative;
      bottom: 23px;
    }
    & .meal-price {
      color: rgb(255, 153, 0);
      font-size: 15px;
    }
  }
  small {
    padding: 0px 5%;
    display: block;
    position: relative;
    bottom: 30px;
  }
  .btn {
    width: 100%;
    border-radius: 20px;
  }
}
.meal-name {
  img {
    width: 60px;
    height: 60px;
    position: relative;
    bottom: 20px;
    background: yellow;
    margin-right: 10px;
    padding: 5px;
  }
  & div {
    display: flex;
    flex-direction: column;
    h5 {
      color: #ffffff;
    }
    h6 {
      margin-top: 15px;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
