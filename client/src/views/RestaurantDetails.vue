<template>
  <div class="wrapper">
    <header>
      <h1>Restaurant Details</h1>
    </header>
    <main class="container">
      <section class="restaurant-details" v-if="restaurant">
        <span @click="toggleIsEditableProfile">
          <font-awesome-icon icon="edit" style="color: grey, max-width:10px" />
          View Menu
        </span>
        <section class="restaurant-info">
          <img
            src="~@/assets/images/restaurant_cover.jpg"
            alt="restuarant view"
          />
          <div class="details">
            <div class="address">
              <img :src="restaurant.coverPhoto" alt="" />
              <div>
                <h6>{{ restaurant.name || "" }}</h6>
                <small class="text-muted">{{ restaurant.address }}</small>
              </div>
            </div>
            <div class="owner">
              <img src="~@/assets/images/defavatar.png" alt="" />
              <div>
                <h6>{{ restaurant.owner.fullname }}</h6>
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
                  <td>
                    <small class="text-muted"
                      >{{ restaurant.name || "" }}
                    </small>
                  </td>
                  <td class="heading">Operating days</td>
                  <td>
                    <small class="text-muted">{{ restaurant.daysOpen }}</small>
                  </td>
                </tr>
                <tr>
                  <td class="heading">Owner</td>
                  <td class="data">
                    <small class="text-muted"
                      >{{ restaurant.owner.fullname }}
                    </small>
                  </td>
                  <td class="heading">Operating hours</td>
                  <td class="data">
                    <small class="text-muted">{{ restaurant.hrsOpen }}</small>
                  </td>
                </tr>
                <tr>
                  <td class="heading">Phone</td>
                  <td class="data">
                    <small class="text-muted">{{
                      restaurant.phone || "-"
                    }}</small>
                  </td>
                  <td class="heading">Website</td>
                  <td class="data">
                    <small class="text-muted"
                      >{{ restaurant.websit || "-" }}
                    </small>
                  </td>
                </tr>

                <tr>
                  <td class="heading">Email</td>
                  <td class="data">
                    <small class="text-muted">{{ restaurant.email }}</small>
                  </td>
                  <td class="heading">Address</td>
                  <td class="data">
                    <small class="text-muted">{{ restaurant.address }} </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="restaurant-description">
          <h4>Description</h4>
          <p>{{ restaurant.description }}</p>
        </section>
      </section>
      <aside><PopularRestaurants /></aside>
    </main>
  </div>
</template>

<script>
import PopularRestaurants from "@/components/restaurants/PopularRestaurants";
import { mapActions, mapState } from "vuex";

export default {
  name: "restaurantDetails",
  components: {
    PopularRestaurants
  },
  mounted () {
    const restaurantId = this.$route.params.id;
    this.handleGetRestaurant(restaurantId);
  },
  computed: {
    ...mapState(["restaurant"])
  },
  methods: {
    ...mapActions(["handleGetRestaurant"])
  }
};
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
    span {
      color: $orange-color;
    };
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
