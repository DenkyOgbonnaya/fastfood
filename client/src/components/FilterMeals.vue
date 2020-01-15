<template>
  <div>
    <div class="card">
      <div
        @click="toggleCardBody"
        :class="isExpanded ? '' : 'dropdown-toggle'"
        class="card-header"
        bg='white'
        >
        Filter
      </div>
      <div class="card-body" :class="isExpanded ? 'visible-cardbody' : 'hidden-cardbody'">
        <h6 class="card-title text-muted">Type</h6>
        <ul class="list-group">
          <li>
            <input
              type="checkbox"
              data-id="asp"
              class="checkbox checkbox--blue-grey"
            />Breakfast
          </li>
          <li>
            <input
              type="checkbox"
              data-id="cplusplus"
              class="checkbox checkbox--blue-grey"
            />Lunch
          </li>
          <li >
            <input
              type="checkbox"
              data-id="devops"
              class="checkbox checkbox--blue-grey"
            />Dinner
          </li>
        </ul>
        <hr>
        <h6 class="card-title text-muted">Categories</h6>
        <ul class="list-group">
          <li>
            <input
              type="checkbox"
              data-id="asp"
              class="checkbox checkbox--blue-grey"
            />Snacks
          </li>
          <li>
            <input
              type="checkbox"
              data-id="cplusplus"
              class="checkbox checkbox--blue-grey"
            />Coffee
          </li>
          <li>
            <input
              type="checkbox"
              data-id="devops"
              class="checkbox checkbox--blue-grey"
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
  props: {
    isExpanded: Boolean
  },
  methods: {
    toggleCardBody () {
      this.isExpanded = !this.isExpanded
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
