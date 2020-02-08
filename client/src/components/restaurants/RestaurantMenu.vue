<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-header">
        <h4>Menu</h4>
        <h4>Details</h4>
      </div>
      <div class="card-body" v-if="menu.length">
        <MenuMeal
          v-for="menuItem in menu"
          :key="menuItem.id"
          :menuItem="menuItem"
        />
      </div>
      <div
        v-else
        class="jumbotron"
      >Menu unavailable!</div>
    </div>
  </div>
</template>

<script>
import MenuMeal from "./MenuMeal";
export default {
  name: "RestaurantMenu",
  components: {
    MenuMeal
  },
  props: {
    menu: Array
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  @include desktop() {
    min-width: 450px;
  }
  .card {
    border: none;
    .card-header {
      display: flex;
      justify-content: space-between;
      background: $warning-color;
      color: $light-color;
    }
    .card-body * {
      margin-bottom: 2px;
    }
    .jumbotron {
      text-align: center;
      background: whitesmoke;
    }
  }
}
</style>
