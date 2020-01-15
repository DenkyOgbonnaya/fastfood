<template>
  <div>
    <div class="card">
      <div
        @click="toggleCardBody"
        :class="shouldExpand ? '' : 'dropdown-toggle'"
        class="card-header"
        bg='white'
        >
        Filter
      </div>
      <div class="card-body" :class="shouldExpand ? 'visible-cardbody' : 'hidden-cardbody'">
        <h6 class="card-title text-muted">Type</h6>
        <ul class="list-group">
          <li>
            <input
              type="checkbox"
              class="checkbox"
            />Breakfast
          </li>
          <li>
            <input
              type="checkbox"
              class="checkbox"
            />Lunch
          </li>
          <li >
            <input
              type="checkbox"
              class="checkbox"
            />Dinner
          </li>
        </ul>
        <hr>
        <h6 class="card-title text-muted">Categories</h6>
        <ul class="list-group">
          <li>
            <input
              type="checkbox"
              class="checkbox"
            />Snacks
          </li>
          <li>
            <input
              type="checkbox"
              class="checkbox"
            />Coffee
          </li>
          <li>
            <input
              type="checkbox"
              class="checkbox"
            />Fastfood
          </li>
        </ul>
      </div>
      <button class="btn btn-warning card-footer">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterMeals',
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
  width: 150px;
  margin: 5%;
  @include desktop(){
    margin: 0;
    width: 200px;
  }
  .visibl-cardbody{
    display: block;
  }
  .hidden-cardbody {
    display: none;
  }
  .card-body ul {
    padding: 0;
    list-style-type: none;
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
.checkbox {
  margin: 10px;
}
</style>
