<template>
  <div class="wrapper">
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/meals">Meals</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Checkout
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <section>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Meal</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="meal-name">
                  <img src="/images/icon_2.svg" alt="meal" class="meal" />
                  <div>
                    <h6>Toasty Burn Burger</h6>
                    <span>Chicken Republic</span>
                  </div>
                </td>
                <td>6</td>
                <td>$5.00</td>
                <td><button class="btn btn-light">Remove</button></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>$5.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <figure class="delivery-shuttle">
          <img src="~@/assets/images/delivery.jpg" alt="delivery shuttle" />
        </figure>
      </section>
      <aside class="delivery">
        <h6>Address</h6>
        <input type="text" placeholder="street address" class="form-control" />
        <input type="text" placeholder="apt number" class="form-control" />
        <input type="text" placeholder="Home" class="form-control" />
        <h6>Payment Method</h6>
        <select class="form-control">
          <option value="">Card</option>
          <option value="">Delivery on cash</option>
        </select>
        <h6>Confirm</h6>
        <input type="text" placeholder="email" class="form-control" />
        <input type="text" placeholder="phone number" class="form-control" />
        <div class="total">
          <span>Total</span>
          <span>$5.00</span>
        </div>
        <div class="time">
          <small class="text-muted">
            <font-awesome-icon icon="shopping-cart" />
            Delivery fee: free
          </small>
          <small class="text-muted">
            <font-awesome-icon
              icon="clock"
              style="color: grey, max-width:10px"
            />
            Delivery time: 30 min
          </small>
        </div>
        <button class="btn btn-warning btn-checkout">Checkout Now</button>
      </aside>
    </main>
    <div class="checkout-assurance">
      <div>
        <figure>
          <img src="~@/assets/images/img_1.svg" alt="" />
        </figure>
        <h6>You information is save</h6>
        <p>
          Every details you provide will not be made public
        </p>
      </div>
      <div>
        <figure>
          <img src="~@/assets/images/img_3.svg" alt="" />
        </figure>
        <h6>Secure Checkout</h6>
        <p>
          We use the best merchant aggregate
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
main {
  margin-top: map-get($margins, top);
  section:first-child {
    .delivery-shuttle img {
      max-width: 100%;
      max-height: 300px;
    }
  }
  @include desktop() {
    display: flex;
    padding: 0 15%;
    max-width: 100%;
    & section:first-child {
      margin-right: 10px;
    }
  }
}
.meal-name {
  display: flex;
}
.meal {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
table {
  border: 1px solid #ccc;
  font-size: 13px;
}
.delivery {
  input, select {
    margin-bottom: 10px;
  }
  h6 {
    margin-bottom: 20px;
}
}
.checkout-assurance {
  @include desktop() {
    display: flex;
    padding: 0 15%;
  }
  div {
    padding: 10px;
    figure img {
      width: 50px;
      height: 50px;
    }
    p {
      color: grey;
      text-align: left;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
}
.total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.time {
  small {
    margin-right: 20px;
  }
  margin-top: 10px;
}
.btn-checkout {
  margin-top: 10px;
}
</style>
