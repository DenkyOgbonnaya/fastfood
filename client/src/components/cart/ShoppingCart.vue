<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-header">
        <h6>Your Order</h6>
        <span>
          <font-awesome-icon icon="shopping-cart" style="color: #ffffff" />
        </span>
      </div>
      <div class="card-body">
        <section>
          <CartItemList/>
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
                <td>N150</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <button class="btn btn-danger btn-block">
          <font-awesome-icon icon="shopping-cart" style="color: #ffffff" />
          Order Now
        </button>
        <button class="btn btn-outline-danger btn-block">
          <font-awesome-icon icon="trash" style="color: rgb(211, 50, 50)" />
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemList from './CartItemList'
export default {
  name: 'orderCart',
  components: {
    CartItemList
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  @include desktop(){
    width: 250px;
  }
}
.card-header{
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
