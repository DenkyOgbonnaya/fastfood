<template>
  <div class="wrapper">
    <section class="profile">
      <div class="profile-cover"></div>
      <div class="profile-details">
        <figure>
          <img src="@/assets/images/defavatar.png" alt="" />
          <figcaption>
            <span>{{ currentUser.fullname }}</span>
            <span> {{ currentUser.location }} </span>
          </figcaption>
        </figure>
        <button class="btn btn-warning btn-sm">Settings</button>
      </div>
    </section>
    <section>
      <div class="profile-nav">
        <ProfileNav :isExpanded="true" />
      </div>
      <router-view>
        <!-- here the ItemModal component will be rendered -->
      </router-view>
    </section>
  </div>
</template>

<script>
import ProfileNav from "@/components/ProfileNav";
import { mapState } from "vuex";
export default {
  name: "UserProfile",
  components: {
    ProfileNav
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  section:first-child {
    .profile-cover {
      background-image: url("~@/assets/images/restaurant_cover.jpg");
      background-size: cover;
      height: 300px;
      @include desktop() {
        height: 400px;
        background-attachment: fixed;
      }
      background-position: top;
    }
    .profile-details {
      display: flex;
      justify-content: space-between;
      padding: 1% 3%;
      background: whitesmoke;
      margin-top: 0;
      height: 100px;
      figure {
        position: relative;
        bottom: 50px;
        display: flex;
        img {
          max-width: 120px;
          height: 120px;
          margin-right: 10px;
          padding: 5px;
          border-radius: 5px;
        }
        figcaption span {
          display: block;
          position: relative;
          top: 55px;
        }
      }
      .btn {
        max-height: 50px;
      }
    }
  }
  section:last-child {
    display: flex;
    margin-top: 3%;
    .profile-nav {
      margin-right: 2%;
    }
  }
}
</style>
