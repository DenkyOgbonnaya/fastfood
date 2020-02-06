<template>
  <div class="wrapper">
    <div class="heading" v-if="meal">
      <h4>{{ meal.name }}</h4>
      <p>(Build your custom meal)</p>
    </div>
    <section v-if="meal">
      <ul>
        <li
          v-for="extra in meal.extras"
          :key="extra.id"
          @click="addToSelectedExtras(extra)"
        >
          <font-awesome-icon icon="plus-circle" style="color:grey" />
          Extra {{ extra.name }}({{ extra.price | formatCurrency }})
        </li>
      </ul>
      <div class="additions">
        <p>Additions</p>
        <ul class="additions" v-if="selectedExtras.length">
          <li v-for="mealExtra in selectedExtras" :key="mealExtra.id">
            <button
              @click="updateQty(mealExtra.qty + 1, mealExtra.id)"
              class="btn btn-light btn-sm rounded-circle btn-qty"
            >
              +
            </button>
            <button
              class="btn btn-light btn-sm rounded-circle btn-qty"
              @click="updateQty(mealExtra.qty - 1, mealExtra.id)"
            >
              -
            </button>
            <span>{{ mealExtra.qty }} x </span>
            <span>{{ mealExtra.name }} </span>
            <span>{{ mealExtra.price | formatCurrency }} </span>
            <span
              @click="removeExtra(mealExtra.id)"
              class="remove-xtra"
            >x</span>
          </li>
        </ul>
      </div>
    </section>
    <div class="total">Total: {{ calcTotal | formatCurrency }}</div>
    <button
      class="btn btn-danger btn-block"
      @click="addToOrder(meal)"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "mealExtras",
  data () {
    return {
      selectedExtras: []
    };
  },
  props: {
    meal: Object
  },
  methods: {
    addToSelectedExtras (mealExtra) {
      let added = this.isExtraAdded(mealExtra.id);
      if (!added) {
        const mealExtraObj = {
          ...mealExtra,
          qty: 1
        };
        this.selectedExtras.push(mealExtraObj);
      }
    },
    addToOrder (meal) {
      const qty = 1;
      const price = this.calcTotal;
      const cartMeal = {
        ...meal,
        price,
        qty,
        extras: this.selectedExtras
      };
      this.$emit("addToCart", cartMeal);
    },
    isExtraAdded (extraId) {
      return this.selectedExtras.find(extra => extra.id === extraId);
    },
    updateQty (qty, extraId) {
      if (qty < 1) return;
      this.selectedExtras = this.selectedExtras.map(extra =>
        extra.id === extraId ? Object.assign({}, extra, { qty }) : extra
      );
    },
    removeExtra (extraId) {
      this.selectedExtras = this.selectedExtras.filter(extra => extra.id !== extraId);
    }
  },
  computed: {
    calcTotal () {
      const mealPrice = this.meal && this.meal.price;
      let extraTotal = this.selectedExtras.reduce(
        (acc, curr) => acc + curr.price * curr.qty,
        0
      );
      return mealPrice + extraTotal;
    }
  },
  filters: {
    formatCurrency (val) {
      const formated = Number(val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      return `₦${formated}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  padding: 2% 5%;
  .heading {
    text-align: center;
    color: $danger-color;
  }
  section {
    @include desktop() {
      display: flex;
      justify-content: space-between;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        color: $dark-color;
        &:hover {
          cursor: pointer;
          color: $danger-color;
        }
        .btn-qty {
          margin-right: 5px;
          width: 25px;
          height: 25px;
          &:hover {
            background: $danger-color;
          }
        }
      }
    }
    ul.additions {
      li {
        color: gray;
      }
      .remove-xtra {
        color: $danger-color;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .additions p {
      color: $danger-color;
    }
  }
  div.total {
    text-align: center;
    font-weight: bold;
    color: $danger-color;
  }
}
</style>
