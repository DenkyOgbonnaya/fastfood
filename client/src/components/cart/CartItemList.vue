<template>
  <div class="wrapper">
    <CartItem/>
    <CartItem/>
  </div>
</template>

<script>
import CartItem from './CartItem'
export default {
  name: 'orderList',
  components: {
    CartItem
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 100%;
  }
</style>
