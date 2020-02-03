<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
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

    <div :class="shouldCollapse ?'collapse' : '' " class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/how-to-order">How to order</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="become-a-partner">Become a partner</a>
        </li>
        <li class="nav-item">
          <a @click="handleAuthModalToggle" class="nav-link" href="#">Login | Signup</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "theHeader",
  data () {
    return {
      shouldCollapse: true
    };
  },
  methods: {
    ...mapActions(["handleAuthModalToggle"]),
    toggleNav () {
      this.shouldCollapse = !this.shouldCollapse;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
  .navbar-brand {
    & span:first-child {
      color: $danger-color;
      font-size: 30px;
      font-weight: map-get($font-weights, bold);
    }
    & span:last-child {
      @extend span:first-child;
      color: $warning-color;
    }
  }
</style>
