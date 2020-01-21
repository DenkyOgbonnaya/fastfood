<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <AppModal
      v-if="isModalVisible"
      @close="closeModal"
    >
      <template v-slot:body>
        <AuthForms/>
      </template>
    </AppModal>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import AppModal from '@/components/AppModal'
import AuthForms from '@/components/authForms/AuthForms'
export default {
  name: 'App',
  data () {
    return {
      isModalVisible: false
    }
  },
  components: {
    TheHeader,
    TheFooter,
    AppModal,
    AuthForms
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .modal {
    justify-self: center;
    align-self: center;
  }
}
</style>
