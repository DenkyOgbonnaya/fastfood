<template>
  <div>
    <div class="card">
      <div
        @click="toggleCardBody"
        :class="shouldExpand ? '' : 'dropdown-toggle'"
        class="card-header"
        bg="white"
      >
        <font-awesome-icon icon="filter" style="color: rgb(255, 153, 0)" />
        Filters
      </div>
      <div
        class="card-body"
        :class="shouldExpand ? 'visible-cardbody' : 'hidden-cardbody'"
      >
        <h6 class="card-title text-muted">Seach</h6>
        <input
          type="search"
          name="search"
          v-model="search"
          class="form-control"
          placeholder="name, city"
          :change="handleRestaurantsSearch(search)"
        />
        <hr />
        <h6 class="card-title text-muted">Filter</h6>
        <select
          v-model="filter"
          class="form-control select"
          @change="handleGetRestaurants({ order: filter })"
        >
          <option value="ASC">RestaurantName A-Z</option>
          <option value="DESC">RestaurantName Z-A</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "restaurantFilter",
  data () {
    return {
      shouldExpand: this.isExpanded || false,
      search: "",
      filter: "ASC"
    };
  },
  props: {
    isExpanded: Boolean
  },
  methods: {
    ...mapActions(["handleRestaurantsSearch", "handleGetRestaurants"]),
    toggleCardBody () {
      this.shouldExpand = !this.shouldExpand;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.card {
  width: 200px;
  margin: 5%;
  @include desktop() {
    margin: 0;
    width: 230px;
  }
  .select {
    font-size: 12px;
  }
  .visibl-cardbody {
    display: block;
  }
  .hidden-cardbody {
    display: none;
  }
  .card-header {
    background: $light-color;
    height: 40px;
  }
}
</style>
