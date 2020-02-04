<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <AppModal v-if="showAuthModal" @close="closeAuthModal">
      <template v-slot:body>
        <AuthForms />
      </template>
    </AppModal>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import AppModal from "@/components/AppModal";
import AuthForms from "@/components/authForms/AuthForms";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    AppModal,
    AuthForms
  },
  methods: {
    ...mapActions(["handleAuthModalToggle"]),
    closeAuthModal () {
      this.handleAuthModalToggle();
    }
  },
  computed: {
    ...mapState(["showAuthModal"])
  }
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .modal {
    justify-self: center;
    align-self: center;
  }
}
</style>
