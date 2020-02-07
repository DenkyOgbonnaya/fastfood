<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-header">
        <h6>Your Order</h6>
        <span>
          <font-awesome-icon icon="shopping-cart" style="color: #ffffff" />
        </span>
      </div>
      <div class="card-body" v-if="cart">
        <section>
          <CartItemList :cart="cart" />
        </section>
        <section class="cart-details">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>Pack fee</td>
                <td>N50</td>
              </tr>
              <tr>
                <td>Delivery fee</td>
                <td>N100</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{{ getCartTotal(restaurantId) | formatCurrency }}</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <button class="btn btn-danger btn-block">
          <font-awesome-icon icon="shopping-cart" style="color: #ffffff" />
          Order Now
        </button>
        <button
          class="btn btn-outline-danger btn-block"
          @click="handleEmptyCart(restaurantId)"
        >
          <font-awesome-icon icon="trash" style="color: rgb(211, 50, 50)" />
          Empty Cart
        </button>
      </div>
      <div class="jumbotron" v-else>
        <font-awesome-icon icon="shopping-cart" style="color: grey" />
        Empty Cart
      </div>
    </div>
  </div>
</template>

<script>
import CartItemList from "./CartItemList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "shoppingCart",
  props: {
    restaurantId: String
  },
  components: {
    CartItemList
  },
  methods: {
    ...mapActions(["handleEmptyCart"]),
    scrollToElement () {
      const el = this.$el.getElementsByClassName("card-header")[0];
      if (el) {
        el.scrollIntoView();
      }
    }
  },
  mounted () {
    this.scrollToElement();
  },
  computed: {
    ...mapGetters(["getCart", "getCartTotal"]),
    cart () {
      let restaurantId = this.restaurantId || "";
      let cart = this.getCart(restaurantId);
      return cart;
    }
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
  @include desktop() {
    width: 250px;
  }
  .card {
    .jumbotron {
      background: $light-color;
      text-align: center;
    }
  }
}
.card-header {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background: $danger-color;
  color: $light-color;
}
.card-body {
  font-size: 12px;
  section.cart-details {
    margin-bottom: 10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    table {
      tfoot {
        font-weight: bold;
      }
    }
  }
}
</style>
