<template>
  <div class="wrapper">
    <div v-if="isCart">
      <CartItem
        v-for="item in cart"
        :key="item.id"
        :item="item"
      />
    </div>
    <div
      v-else
      class="jumbotron"
    >
      <font-awesome-icon icon="shopping-cart" style="color: grey" />
      Empty Cart
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  name: "cartItemList",
  props: {
    cart: Array
  },
  components: {
    CartItem
  },
  computed: {
    isCart () {
      return this.cart ? this.cart.length : false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  max-width: 100%;
  .jumbotron {
    background: $light-color;
    text-align: center;
  }
}
</style>
