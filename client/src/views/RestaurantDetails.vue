<template>
  <div class="wrapper">
    <header>
      <h1>Restaurant Details</h1>
    </header>
    <main class="container">
      <section class="restaurant-details">
        <section class="restaurant-info">
          <img src="~@/assets/images/restaura.jpeg" alt="restuarant view" />
          <div class="details">
            <div class="address">
              <img src="~@/assets/images/img_1.svg" alt="" />
              <div>
                <h6>Chicken republic</h6>
                <small class="text-muted">123 lagos</small>
              </div>
            </div>
            <div class="owner">
              <img src="~@/assets/images/banner-1.jpg" alt="" />
              <div>
                <h6>John Doe</h6>
                <small class="text-muted">owner</small>
              </div>
            </div>
          </div>
        </section>
        <section class="restaurant-about">
          <h4>About Restaurant</h4>
          <div class="table-responsive">
            <table class="table table-responsive table-borderless">
              <tbody>
                <tr>
                  <td class="heading">Name</td>
                  <td><small class="text-muted">John Doe </small></td>
                  <td class="heading">Operating hours</td>
                  <td><small class="text-muted">2am-4pm</small></td>
                </tr>
                <tr>
                  <td class="heading">Owner</td>
                  <td class="data">
                    <small class="text-muted">John Doe </small>
                  </td>
                  <td class="heading">status</td>
                  <td class="data"><small class="text-muted">online</small></td>
                </tr>
                <tr>
                  <td class="heading">Phone</td>
                  <td class="data">
                    <small class="text-muted">+234 7069797</small>
                  </td>
                  <td class="heading">Country</td>
                  <td class="data">
                    <small class="text-muted">Nigeria </small>
                  </td>
                </tr>

                <tr>
                  <td class="heading">email</td>
                  <td class="data">
                    <small class="text-muted">Denkyogb@gmai.com</small>
                  </td>
                  <td class="heading">address</td>
                  <td class="data">
                    <small class="text-muted">23 hicon street </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="restaurant-description">
          <h4>Description</h4>
          <p>
            FastFood is a network of restaurants and bars in your city, making
            meals and drinks easy, assessible for everyone. It is not just about
            bringing great meals from your favorite restaurants directly to you,
            it is about making a connection
          </p>
        </section>
      </section>
      <aside><PopularRestaurants /></aside>
    </main>
  </div>
</template>

<script>
import PopularRestaurants from '@/components/restaurants/PopularRestaurants'
export default {
  name: 'RestaurantDetails',
  components: {
    PopularRestaurants
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
@mixin details-flex($direction) {
  display: flex;
  flex-direction: $direction;
}
.wrapper {
  padding: 20px;
  main {
    margin-top: 5%;
    .restaurant-info {
      margin-bottom: 3%;
      img {
        width: 100%;
        max-height: 400px;
      }
      .details {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border-bottom: 1px solid #ccc;
      }
    }
    .restaurant-about {
      margin-bottom: 3%;
      padding: 5px;
      p {
        font-size: 13px;
      }
    }
    .restaurant-description {
      border: 1px solid #ccc;
      padding: 5px;
    }
    .address,
    .owner {
      @include details-flex(column);
      & img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
    }
    .owner img {
      clip-path: circle(50%);
    }
    @include desktop() {
      display: flex;
      justify-content: space-around;
      .restaurant-details {
        max-width: 60%;
        .details div {
          @include details-flex(row);
          div {
            display: block;
          }
        }
      }
      .aside {
        margin-left: 1%;
      }
    }
  }
}
</style>
