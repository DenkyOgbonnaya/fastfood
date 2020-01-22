<template>
    <div class="wrapper">
      <header>
        <h4>Order History</h4>
      </header>
      <section>
        <MealOrderList/>
      </section>
    </div>
</template>
<script>
import MealOrderList from '@/components/orders/MealOrderList'
export default {
  name: 'orderHistory',
  components: {
    MealOrderList
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    section {
      margin-top: 3%;
    }
  }
</style>
