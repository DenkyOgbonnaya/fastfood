<template>
  <div class="home-view-container">
    <section>
      <div>
        <h1>Choose order and checkout</h1>
        <p>Specify your address to suggest you the fast delivery</p>
        <p>Food from your favorite restaurants delivered directly to you</p>
      </div>
      <form>
        <div class="form-group">
          <label for="location">Location*</label>
          <select name="location" class="form-control">
            <option>select location</option>
            <option>Abuja</option>
          </select>
        </div>

        <div class="form-group">
          <label for="area">Area*</label>
          <select name="area" class="form-control">
            <option>select area</option>
            <option>Gwadalada</option>
          </select>
        </div>
        <button class="btn btn-warning">Start shopping</button>
      </form>
    </section>
    <OrderFlow />
    <h4>Order Food Online From Your Favourite Restuarants</h4>
    <section class="restaurant-list">
      <div class="meal-filter-desk">
        <RestaurantFilter :isExpanded="true" />
      </div>
      <div class="meal-filter-mobi">
        <RestaurantFilter :isExpanded="false" />
      </div>
      <RestaurantList :restaurants="getRestaurants()" />
    </section>
    <div class="offer_container">
      <div class="offer_card">
        <h3 class="card-title">Get Breakfast and Lunch deals</h3>
        <p class="card-text">
          Direct to your office starting from N5000/Week
        </p>
        <button class="btn btn-warning">Comming Soon</button>
      </div>
      <div class="offer_card">
        <h3 class="card-title">
          Partnership
          <span class="text-warning">
          <font-awesome-icon
          icon="long-arrow-alt-right"
          />
          </span>
          Open Now</h3>
        <p class="card-text">
          We are open to partnerships for bulk purchases.
        </p>
        <button class="btn btn-warning">Sign Up</button>
      </div>
    </div>
    <SubscriptionDeals />
  </div>
</template>

<script>
import OrderFlow from "@/components/OrderFlow";
import RestaurantList from "@/components/restaurants/RestaurantList";
import RestaurantFilter from "@/components/restaurants/RestaurantFilter";
import SubscriptionDeals from "@/components/SubscriptionDeals";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    OrderFlow,
    RestaurantList,
    RestaurantFilter,
    SubscriptionDeals
  },
  mounted () {
    const paginationOptions = {
      page: 1,
      limit: 4
    };
    this.handleGetRestaurants(paginationOptions);
  },
  methods: {
    ...mapActions(["handleGetRestaurants"]),
    ...mapGetters(["getRestaurants"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.home-view-container {
  section:first-child {
    color: $light-color;
    background-image: url("~@/assets/images/home-banner.jpg");
    background-size: cover;
    & > div {
      display: none;
    }
    form {
      background: transparent;
      padding: 20% 10px;
    }
  }
  h4 {
    margin-top: map-get($margins, top);
    margin-bottom: map-get($margins, bottom);
    font-weight: map-get($font-weights, bold);
    text-align: center;
    @include desktop() {
      margin-top: map-get($margins-desktop, top);
      margin-bottom: map-get($margins-desktop, bottom);
    }
  }
  .restaurant-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & .meal-filter-desk {
      display: none;
    }
    & .meal-filter-mobi {
      display: block;
    }
    @include desktop() {
      flex-direction: row;
      padding: 2% 5%;
      .meal-filter-desk {
        display: block;
      }
      .meal-filter-mobi {
        display: none;
      }
    }
  }
  .offer_container {
    margin-top: map-get($margins, top);
    & div:first-child {
      background-image: url("~@/assets/images/banner-1.jpg");
      background-size: cover;
      text-align: left;
      color: $light-color;
      width: 92%;
      padding: 20px;
      margin: 3%;
    }
    & div:last-child {
      @extend div:first-child;
      background-image: url("~@/assets/images/banner-2.jpg");
    }
    @include desktop() {
      display: flex;
      margin-top: map-get($margins-desktop, top);
      & div {
        width: 100%;
      }
    }
  }
  @include desktop() {
    & section:first-child {
      display: flex;
      justify-content: space-around;
      & > div {
        display: block;
        font-weight: map-get($font-weights, bold);
        font-size: 20px;
        h1 {
          font-weight: map-get($font-weights, bold);
          margin-top: map-get($margins-desktop, top);
        }
      }
      & form {
        padding: 7% 1%;
        width: 28%;
        opacity: 0.7;
        background: #272727;
      }
    }
  }
}
</style>
