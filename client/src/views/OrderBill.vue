<template>
  <div class="wrapper">
    <header>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Order Bill
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <div class="order-bill-con">
        <h4>Thank you so much for your order</h4>
        <div> <em>We really appreciate it!</em> </div>
        <figure>
          <img src="~@/assets/images/orderbill.jpg" alt="delivery shuttle" />
        </figure>
          <table class="table table-responsive table-borderless W-100" >
            <tbody>
              <tr>
                <td>Order to</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>Address</td>
                <td> <address>23 brec;</address> </td>
              </tr>
              <tr>
                <td>Order from</td>
                <td>Chicken republic</td>
              </tr>
              <tr>
                <td>Meal</td>
                <td>Toasty Burns Burger</td>
              </tr>
              <tr>
                <td>Qty</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Payment Method</td>
                <td>Card</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$4.00</td>
              </tr>
            </tbody>
          </table>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  main {
    display: flex;
    justify-content: center;
    & .order-bill-con {
      border: 1px dashed #212121;
      h4 {
        text-align: center;
        margin-top: 5%;
      }
      & div {
          color: rgb(255, 153, 0);
          text-align: center;
      }
      figure img {
        max-width: 100%;
      }
      table  {
          width: 100%;
          padding: 5%;
          font-size: 14px;
      }
    }
  }
}
</style>
