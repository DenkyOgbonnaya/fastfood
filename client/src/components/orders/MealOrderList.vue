<template>
  <div class="wrapper">
    <table class="table table-responsive">
      <thead>
        <tr>
          <th scope="col">Meal</th>
          <th scope="col">Qty</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <MealOrder/>
        <MealOrder/>
        <MealOrder/>
      </tbody>
    </table>
  </div>
</template>

<script>
import MealOrder from './MealOrder'
export default {
  name: 'mealOrderList',
  components: {
    MealOrder
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    table {
      font-size: 13px;
    }
  }
</style>
