<template>
  <div class="wrapper">
    <div class="card">
      <div
        @click="toggleCardBody"
        class="card-header" bg="white"
        :class="shouldExpand ? '' : 'dropdown-toggle'"
      >
        Rice
      </div>
      <div
        class="card-body"
        :class="shouldExpand ? 'visible-cardbody' : 'hidden-cardbody'"
      >
        <figure>
          <img src="@/assets/images/banner-1.jpg" alt="" />
        </figure>
        <table class="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jollof Rice</td>
              <td>$200</td>
              <td>
                <button
                  @click="addToCart"
                  class="btn btn-outline-danger">
                  <font-awesome-icon
                    icon="plus-circle"
                    class="f-awesome"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <AppModal
      v-if="isVisibleMealExtraModal"
      @close="closeMealExtraModal"
    >
      <template v-slot:body>
        <MealExtra/>
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from '../AppModal'
import MealExtra from '../cart/MealExras'
export default {
  name: 'FilterMeal',
  data () {
    return {
      shouldExpand: this.isExpanded || false,
      isVisibleMealExtraModal: false
    }
  },
  props: {
    isExpanded: Boolean
  },
  components: {
    AppModal,
    MealExtra
  },
  methods: {
    toggleCardBody () {
      this.shouldExpand = !this.shouldExpand
    },
    addToCart () {
      this.openMealExtraModal()
    },
    openMealExtraModal () {
      this.isVisibleMealExtraModal = true
    },
    closeMealExtraModal () {
      this.isVisibleMealExtraModal = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.card{
  .visibl-cardbody {
    display: block;
  }
  .hidden-cardbody {
    display: none;
  }
  .card-body {
    figure img {
      max-width: 100%;
    }
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    background: $light-color;
    font-size: 25px;
  }
}
.f-awsome {
  color: $danger-color;
}
</style>
