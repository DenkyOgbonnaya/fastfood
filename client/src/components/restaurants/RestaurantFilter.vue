<template>
  <div>
    <div class="card">
      <div
        @click="toggleCardBody"
        :class="shouldExpand ? '' : 'dropdown-toggle'"
        class="card-header"
        bg='white'
        >
        <font-awesome-icon
          icon="filter"
          style="color: rgb(255, 153, 0)"
        />
        Filters
      </div>
      <div class="card-body" :class="shouldExpand ? 'visible-cardbody' : 'hidden-cardbody'">
        <h6 class="card-title text-muted">Seach</h6>
        <input type="search"
          name="search"
          class="form-control"
          placeholder="name, city"
        >
        <hr>
        <h6 class="card-title text-muted">Filter</h6>
        <select
          name="filter"
          class="form-control"
        >
          <option value="delivery">Fast delivery</option>
          <option value="priceLow">Price low-high</option>
          <option value="priceHigh">Price high-low</option>
        </select>
      </div>
      <button class="btn btn-warning card-footer">
        <font-awesome-icon
          icon="search"
          style="color: #ffffff"
        />
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'restaurantFilter',
  data () {
    return {
      shouldExpand: this.isExpanded || false
    }
  },
  props: {
    isExpanded: Boolean
  },
  methods: {
    toggleCardBody () {
      this.shouldExpand = !this.shouldExpand
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.card {
  width: 200px;
  margin: 5%;
  @include desktop(){
    margin: 0;
    width: 230px;
  }
  .visibl-cardbody{
    display: block;
  }
  .hidden-cardbody {
    display: none;
  }
  .card-header {
    background: $light-color;
    height: 40px;
  }
  .card-footer {
    background: rgb(255, 153, 0);
    color: $light-color;
    height: 40px;
    padding: 10px;
  }
}
</style>
