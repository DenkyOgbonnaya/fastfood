<template>
  <div class="header-container">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#" class="navbar-brand">
        <span>Fast</span><span>Food</span></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav align="center">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/how-to-order">How to order</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"
            ><span class="account-nav-item">Create Account</span></b-nav-item
          >
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.header-container {
  height: 10%;
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
}
</style>
