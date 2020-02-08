<template>
  <div class="wrapper">
    <div class="card" v-if="menuItem">
      <div
        @click="toggleCardBody"
        class="card-header"
        bg="white"
        :class="shouldExpand ? '' : 'dropdown-toggle'"
      >
        {{ menuItem.name }}
      </div>
      <div
        class="card-body"
        :class="shouldExpand ? 'visible-cardbody' : 'hidden-cardbody'"
      >
        <div
          class="menu-itm-img"
          :style="{ backgroundImage: `url(${menuItem.photo})` }"
        ></div>
        <div class="menu-itm-meals">

        </div>
        <table class="table" v-if="hasMealsItems">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="meal in menuItem.meals"
              :key="meal.id"
            >
              <td>{{meal.name}}</td>
              <td>{{meal.price}}</td>
              <td>
                <button @click="addToOrder(meal)" class="btn btn-outline-danger">
                  <font-awesome-icon icon="plus-circle" class="f-awesome" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>No meals</div>
      </div>
    </div>
    <AppModal v-if="isVisibleMealExtraModal" @close="closeMealExtraModal">
      <template v-slot:body>
        <MealExtra
          :meal="meal"
          @addToCart="addToCart"
        />
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from "../AppModal";
import MealExtra from "../meals/MealExras";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "menuMeal",
  data () {
    return {
      shouldExpand: this.isExpanded || false,
      isVisibleMealExtraModal: false,
      meal: null
    };
  },
  props: {
    isExpanded: Boolean,
    menuItem: Object
  },
  components: {
    AppModal,
    MealExtra
  },
  methods: {
    ...mapActions(["handleUpdateCarts"]),
    toggleCardBody () {
      this.shouldExpand = !this.shouldExpand;
    },
    addToOrder (meal) {
      if (this.hasExtraMeals(meal)) {
        this.meal = meal;
        this.openMealExtraModal();
      } else {
        let qty = 1;
        let cartMeal = { ...meal, qty };
        this.addToCart(cartMeal);
      }
    },
    addToCart (meal) {
      this.isVisibleMealExtraModal && this.closeMealExtraModal();
      let restaurantId = this.restaurant.id;
      let cart = this.getCart(restaurantId);

      if (cart) {
        let cartCopy = [...cart];
        if (this.isMealInCart(meal, cartCopy)) return;
        cartCopy.push(meal);

        let data = {
          restaurantId,
          cart: cartCopy
        }
        this.handleUpdateCarts(data);
        // localStorage.setItem(restaurantId, JSON.stringify(cartCopy))
      } else {
        let newCart = [];
        newCart.push(meal);

        let data = {
          restaurantId,
          cart: newCart
        }
        this.handleUpdateCarts(data);
        // localStorage.setItem(restaurantId, JSON.stringify(cart));
      }
    },
    openMealExtraModal () {
      this.isVisibleMealExtraModal = true;
    },
    closeMealExtraModal () {
      this.isVisibleMealExtraModal = false;
    },
    hasExtraMeals (meal) {
      return meal.extras ? meal.extras.length : false;
    },
    isMealInCart (meal, cart) {
      return cart.find(item => item.id === meal.id);
    }
  },
  computed: {
    ...mapState(["restaurant"]),
    ...mapGetters(["getCart"]),
    hasMealsItems () {
      return this.menuItem.meals.length;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.card {
  .visibl-cardbody {
    display: block;
  }
  .hidden-cardbody {
    display: none;
  }
  .card-body {
    .menu-itm-img {
      max-width: 100%;
      background-size: cover;
      height: 200px;
    }
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    background: $light-color;
    font-size: 25px;
    &:hover {
      cursor: pointer;
    }
  }
}
.f-awsome {
  color: $danger-color;
}
</style>
