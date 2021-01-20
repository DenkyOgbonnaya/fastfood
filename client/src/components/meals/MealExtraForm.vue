<template>
  <div>
    <input
      type="text"
      name="name"
      placeholder="eg plantain"
      v-model="name"
    />
    <input
      type="number"
      name="price"
      placeholder="price"
      v-model="price"
    />
    <button
      class="btn btn-warning btn-sm"
      @click.prevent="addExtra"
    >
      Add Extra
    </button>
    <ul v-if="extraMeals.length">
        <li
          v-for="(extraMeal, index) in extraMeals"
          :key="index"
        >
          <span class="badge badge-dark">{{extraMeal.name}} {{" "}} N{{extraMeal.price}}</span>
          <span @click="removeExtra(index)">x</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mealExtraForm',
  data () {
    return {
      extraMeals: [],
      name: '',
      price: ''
    }
  },
  methods: {
    addExtra () {
      let extraMeal = {
        name: this.name,
        price: Number(this.price)
      }
      this.extraMeals.push(extraMeal)
      this.$emit("passExtras", extraMeal)

      this.price = '';
      this.name = '';
    },
    removeExtra (index) {
      this.extraMeals = this.extraMeals.filter((meal, mealIndex) => mealIndex !== index)
      this.$emit("removeExtras", index)
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    margin-right: 5px;
  }
  ul {
    padding: 0;
    list-style-type: none;
    li {
      margin-right: 5px;
      font-size: 14px;
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
</style>
