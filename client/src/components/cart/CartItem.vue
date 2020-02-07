<template>
  <div class="wrapper" v-if="item">
    <div class="meal">
      <button
        class="btn btn-light btn-sm rounded-circle"
        @click="updateQty(item.id, item.qty + 1)"
      >
        +
      </button>
      <button
        class="btn btn-light btn-sm rounded-circle"
        @click="updateQty(item.id, item.qty - 1)"
      >
        -
      </button>
      <span> {{ item.qty }} x </span>
      <span>{{ item.name }}</span>
      <ul v-if="hasExtras(item)">
        <li v-for="extra in item.extras" :key="extra.id">
          +{{ extra.name }} ({{ extra.qty }})-
          <span>{{ extra.price | formatCurrency }}</span>
        </li>
      </ul>
    </div>
    <div class="price">{{ calcTotal(item) | formatCurrency }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "cartItem",
  props: {
    item: Object
  },
  methods: {
    ...mapActions(["handleUpdateMealQty"]),
    calcTotal (item) {
      const itemPrice = item && item.price * item.qty;
      return itemPrice;
    },
    hasExtras (item) {
      return item.extras ? item.extras.length : false;
    },
    updateQty (mealId, qty) {
      if (qty < 1) return;
      const data = {
        mealId,
        qty,
        restaurantId: this.restaurant.id
      };
      this.handleUpdateMealQty(data);
    }
  },
  computed: {
    ...mapState(["restaurant"])
  },
  filters: {
    formatCurrency (val) {
      const formated = Number(val)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
      return `₦${formated}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  max-width: 100%;
}
.meal {
  ul {
    list-style-type: none;
    li {
      color: grey;
    }
  }
  .btn {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    &:hover {
      background: $danger-color;
    }
  }
  span > {
    font-weight: bold;
  }
}
.price {
  font-weight: bold;
}
</style>
