<template>
  <main>
    <h3>How To Order?</h3>
    <p class="text-muted">Ordering is as easy as A-B-C</p>

    <HowToOrder
      v-for="detail in details"
      :key="detail.num"
      :detail='detail'
    />
  </main>
</template>

<script>
import HowToOrder from '@/components/HowToOrder'
import details from '@/data/how-to-order'
export default {
  name: 'HowToORder',
  data () {
    return {
      details
    }
  },
  components: {
    HowToOrder
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 2%;
  h3, p {
    text-align: center;
  }
}
</style>
