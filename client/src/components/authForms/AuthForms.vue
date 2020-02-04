<template>
  <div class="wrapper">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          class="nav-link"
          href="#"
          @click="renderLoginForm"
          :class="{showLogin: 'active'}"
        >
          Login
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#"
          @click="renderSignupForm"
          :class="{showSignUp: 'active'}"
        >
        Sign up
        </a>
      </li>
    </ul>
    <TheLoginForm v-if="showLogin"/>
    <TheSignupForm v-if="showSignUp"/>
  </div>
</template>

<script>
import TheLoginForm from './TheLoginForm'
import TheSignupForm from './TheSignupForm'
export default {
  name: 'AUthForms',
  data () {
    return {
      showLogin: true,
      showSignUp: false
    }
  },
  components: {
    TheLoginForm,
    TheSignupForm
  },
  methods: {
    renderLoginForm () {
      this.showLogin = true
      this.showSignUp = false
    },
    renderSignupForm () {
      this.showSignUp = true
      this.showLogin = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  color: #212121;
}
</style>
