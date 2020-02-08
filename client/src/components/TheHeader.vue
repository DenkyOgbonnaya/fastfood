<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
    <span class="navbar-brand">
      <span>Fast</span>
      <span>Food</span>
    </span>
    <button
      class="navbar-toggler"
      @click="toggleNav"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      :class="shouldCollapse ? 'collapse' : ''"
      class="navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/how-to-order">How to order</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link text-warning" to="become-a-partner">
            Become a partner
            <font-awesome-icon
            icon="hands-helping"
            style="color: #ffffff"
           />
          </router-link>
        </li>
        <li
          class="nav-item"
          v-if="isAuthenticated()"
        >
          <router-link class="nav-link" to="user-profile">
            {{isAuthenticated().fullname}}
          </router-link>
        </li>
        <li
          class="nav-item"
          v-if="!isAuthenticated()"
        >
          <a @click="handleAuthModalToggle" class="nav-link text-light" href="#"
            >Login | Signup</a
          >
        </li>
        <li
          class="nav-item"
          v-if="isAuthenticated()"
        >
          <a @click="handleLogout" class="nav-link text-light" href="/"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "theHeader",
  data () {
    return {
      shouldCollapse: true
    };
  },
  methods: {
    ...mapActions(["handleAuthModalToggle", "handleLogout"]),
    ...mapGetters(["isAuthenticated"]),
    toggleNav () {
      this.shouldCollapse = !this.shouldCollapse;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.navbar-brand {
  & span:first-child{
    color: $light-color;
    font-size: 30px;
    font-weight: map-get($font-weights, bold);
  }
  & span:last-child {
    @extend span:first-child;
    color: $warning-color;
  }
}
</style>
