<template>
  <div class="wrapper">
    <h4>Build your menu</h4>
    <p>
      Add the categories of edibles you offer. eg Rice, Beans, swallow, soup,
      drinks, water etc
    </p>
    <form @submit.prevent="addCategory">
      <div class="form-group">
        <label for="name">Category name*</label>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder=" eg Drinks"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="cover">Add a cover photo</label>
        <input
          type="file"
          name="cover"
          class="form-control"
        />
      </div>
      <button class="btn btn-warning">Add</button>
    </form>
      <ul v-if="categories.length">
        <li
          v-for="(category, index) in categories"
          :key="index"
        >
          <span class="badge badge-primary">{{category.name}}</span>
          <span @click="removeCategory(index)">x</span>
        </li>
    </ul>
    <button class="btn btn-danger btn-finish">Finish</button>
  </div>
</template>

<script>
export default {
  name: 'mealExtraForm',
  data () {
    return {
      categories: [],
      name: '',
      coverPhoto: ''
    }
  },
  methods: {
    addCategory () {
      let category = {
        name: this.name,
        coverPhoto: this.coverPhoto
      }
      this.categories.push(category)
    },
    removeCategory (index) {
      this.categories = this.categories.filter((category, catIndex) => catIndex !== index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  padding: 2%;
  h4,
  p {
    text-align: center;
  }
  h4 {
    color: $danger-color;
    font-weight: bold;
  }
  ul {
    padding: 0;
    list-style-type: none;
    margin-top: 10px;
    li {
      margin-right: 5px;
      font-size: 16px;
    }
    span {
      margin-right: 10px;
    }
    span:last-child {
      &:hover {
        color: orange;
        cursor: pointer;
      }
    }
  }
  .btn-finish {
    margin-top: 10px;
  }
}
</style>
