<template>
  <div class="wrapper">
    <section class="profile">
      <figure class="profile-cover">
        <img src="@/assets/images/restaura.jpeg" alt="" />
      </figure>
      <div class="profile-details">
        <figure>
          <img src="@/assets/images/defavatar.png" alt="" />
          <figcaption>
              <span>John Doe</span>
              <span>Location</span>
          </figcaption>
        </figure>
        <button class="btn btn-warning btn-sm">Settings</button>
      </div>
    </section>
    <section>
      <div class="profile-nav">
        <ProfileNav :isExpanded="true"/>
    </div>
      <router-view>
    <!-- here the ItemModal component will be rendered -->
      </router-view>
    </section>
  </div>
</template>

<script>
import ProfileNav from '@/components/ProfileNav'
export default {
  name: 'UserProfile',
  components: {
    ProfileNav
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    section:first-child {
      .profile-cover img {
        width: 100%;
        max-height: 300px;
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
          figCaption span{
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
