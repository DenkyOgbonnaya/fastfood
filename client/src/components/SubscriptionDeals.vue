<template>
  <div class="container">
    <h4>Subscription Deals</h4>
    <span>Schedule meals (Breakfast/Lunch) directly to your office</span>
    <div class="card_main">
      <div>
        <img src="~@/assets/images/meal-1.svg" /> <br />
        <span>Salad</span>
      </div>
      <div>
        <img src="~@/assets/images/meal-2.svg" /> <br />
        <span>Lunch</span>
      </div>
      <div>
        <img src="~@/assets/images/meal-4.svg" /> <br />
        <span>Drinks</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionDeals'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.container {
  &>h4, &>span {
      display: block;
    text-align: center;
  }
}
.card_main {
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: map-get($margins, top);
  @include desktop(){
    margin-top: map-get($margins-desktop, top);
  }
  & div {
    display: block;
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      &:hover {
        cursor: default;
        transform: rotate(360deg);
        transition: all 0.4s ease-in-out 0s;
      }
    }
    span {
        margin-right: 20px;
        margin-top: 20px;
        &:hover {
            color:$warning-color;
        }
    }
  }
}
h4 {
    font-weight: bold;
    color: $dark-color;
    margin: 4% 0 0 0;
}
</style>
