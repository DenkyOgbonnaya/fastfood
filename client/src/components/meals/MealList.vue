<template>
  <div class="container">
    <div
      v-if="isMeals"
      class="row"
    >
      <div
        v-for="meal in meals"
        :key="meal._id"
        class="col-sm-12 col-md-4"
      >
        <MealCard :meal="meal"/>
      </div>
    </div>
    <div v-else-if="isEmpty">No meals</div>
    <div v-else class="spinner-border text-warning" role="status">
      <span class="sr-only">loading...</span>
    </div>
  </div>
</template>

<script>
import MealCard from './MealCard'
export default {
  name: 'MealList',
  props: {
    meals: Array
  },
  components: {
    MealCard
  },
  computed: {
    isMeals () {
      return this.meals && this.meals.length
    },
    isEmpty () {
      return this.meals && this.meals.length === 0
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5px;
}
</style>
