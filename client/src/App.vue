<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
