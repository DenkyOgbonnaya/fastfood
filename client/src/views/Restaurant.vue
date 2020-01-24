<template>
  <div class="wrapper">
    <header>
      <nav class="header-nav" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            restaurant name
          </li>
        </ol>
      </nav>
      <div class="restaurant-intro">
        <h1>Denky Delicious: Restaurant</h1>
        <p>The best restaurant for all your fast food</p>
        <p>N0 4 Hillcon street</p>
      </div>
    </header>
    <main>
      <section class="restaurant-menu">
        <RestaurantMenu />
      </section>
      <section class="shopping-cart">
        <ShoppingCart />
      </section>
    </main>
  </div>
</template>

<script>
import RestaurantMenu from '@/components/restaurants/RestaurantMenu'
import ShoppingCart from '@/components/cart/ShoppingCart'
export default {
  name: 'restaurant',
  components: {
    RestaurantMenu,
    ShoppingCart
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  header{
    height: 300px;
    background-image: url("~@/assets/images/home-banner.jpg");
    background-size: cover;
    @include desktop() {
      height: 400px;
    }
    .restaurant-intro {
      text-align: center;
      color: $light-color;
      p {
        color: $danger-color;
      }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2%;
    @include desktop() {
      flex-direction: row;
    }
  }
}
</style>
