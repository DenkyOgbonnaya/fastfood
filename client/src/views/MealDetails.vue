<template>
  <div class="wrapper">
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/meals">Meals</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Meal details
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <section>
        <figure>
          <img src="~@/assets/images/banner-1.jpg" alt="meal-img primary" />
        </figure>
        <div class="meal-thumbnails">
          <img src="~@/assets/images/banner-1.jpg" alt="meal-thumbnail 1" />
          <img src="~@/assets/images/banner-1.jpg" alt="meal-thumbnail 2" />
          <img src="~@/assets/images/banner-1.jpg" alt="meal-thumbnail 3" />
        </div>
        <div class="meal-restaurant">
          <div class="address">
            <img src="/images/icon_1.svg" alt="restaurant logo" />
            <div>
              <h6>Chicken republic</h6>
              <small class="text-muted">
                <font-awesome-icon
                  icon="map-marker-alt"
                  style="color: rgb(255, 153, 0)"
                />
                123 lagos
              </small>
            </div>
          </div>
          <div class="partner">
            <button class="btn btn-warning">Partner</button>
            <div class="rating">
              <font-awesome-icon icon="star" style="color: rgb(255, 153, 0)" />
              <font-awesome-icon icon="star" style="color: rgb(255, 153, 0)" />
              <font-awesome-icon icon="star" style="color: rgb(255, 153, 0)" />
              <font-awesome-icon icon="star" style="color: rgb(255, 153, 0)" />
              <font-awesome-icon icon="star" style="color: rgb(255, 153, 0)" />
              <span>5/5</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h4>Sweet Burger</h4>
        <p>this is a very Sweet burger, yummy yummy hahahahahaha!!</p>
        <div class="meal-price">$5.00</div>
        <div class="delivery">
          <small class="text-muted">
            <font-awesome-icon icon="shopping-cart" />
            Delivery fee: free
          </small>
          <small class="text-muted">
            <font-awesome-icon
              icon="clock"
              style="color: grey, max-width:10px"
            />
            Delivery time: 30min
          </small>
        </div>
        <div class="meal-qty">
          <h5>Qty</h5>
          <div>
            <button class="btn btn-warning btn-sm">
              <font-awesome-icon icon="minus-square" style="color: #ffffff" />
            </button>
            <input type="text" />
            <button class="btn btn-warning btn-sm">
              <font-awesome-icon icon="plus-square" style="color: #ffffff" />
            </button>
          </div>
        </div>
        <div class="meal-total">
          <h6>Total</h6>
          <span>$5</span>
        </div>
        <button class="btn btn-warning btn-cart">Add to Cart</button>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
main {
  margin-top: map-get($margins, top);
  padding: 0 2%;
  @include desktop(){
    display: flex;
    padding: 0 15%;
  }
  & section:first-child {
    @include desktop(){
      margin-right: 20px;
    };
    figure img {
      max-width: 100%;
      height: 300px;
      @include desktop(){
        height: 350px;
      }
    }
    .meal-thumbnails img {
      max-width: 60px;
      height: 60px;
      margin-right: 5px;
    }
    .meal-restaurant {
      display: flex;
      justify-content: space-between;
    }
  }
  & section:last-child {
    p {
      font-size: 14px;
      color: grey;
    }
    h4 {
      font-weight: bold;
    }
    .meal-price {
      color: rgb(255, 153, 0);
    }
    .delivery {
      small {
        margin-right: 10px;
      }
    }
    .meal-qty {
      margin-top: 20px;
      div {
        margin-top: 20px;
        input {
          max-width: 70px;
          max-height: 30px;
          padding: 10px 3%;
        }
      }
    }
    .meal-total {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 10px;
    }
    & .btn-cart {
      margin-top: 20px;
    }
  }
}
.meal-restaurant {
  padding: 10px;
  .address {
    @include desktop(){
      display: flex;
    }
    img {
      width: 50px;
      height: 50px;
      background: $warning-color;
      margin-right: 10px;
    }
    div h6 {
      font-weight: bold;
    }
  }
  .partner {
     @include desktop(){
      display: flex;
    }
    .btn {
      margin-bottom: 10px;
      margin-right: 20px;
      max-height: 30px;
      padding-bottom: 5px;
    }
    .rating span {
      margin-left: 5px;
      background: rgb(255, 153, 0);
      border-radius: 10px;
      padding: 5px;
      font-size: 13px;
    }
  }
}
</style>
