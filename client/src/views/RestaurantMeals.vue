<template>
  <div class="wrapper">
    <header>
      <h4>Meals</h4>
      <main>
        <div>
          <h5>Restauarant order online meals</h5>
          <span @click="showAddMealModal">
             <font-awesome-icon icon="plus-square" style="color: grey, max-width:10px" />
             Add Meals
          </span>
        </div>
        <section>
          <div class="card_main">
            <div>
              <img src="~@/assets/images/meal-1.svg" /> <br />
              <span>Breakfast</span>
            </div>
            <div>
              <img src="~@/assets/images/meal-2.svg" /> <br />
              <span>Lunch</span>
            </div>
            <div>
              <img src="~@/assets/images/meal-4.svg" /> <br />
              <span>Dinner</span>
            </div>
          </div>
        </section>
        <section>
          <h5>All Meals</h5>
          <MealList :meals="meals"/>
          <AppModal
            v-if="isAddMealModalVisible"
            @close="closeAddMealModal"
          >
            <template v-slot:body>
              <MealForm/>
            </template>
          </AppModal>
        </section>
      </main>
    </header>
  </div>
</template>

<script>
import MealList from '@/components/meals/MealList'
import AppModal from '@/components/AppModal'
import MealForm from '@/components/meals/MealForm'
export default {
  name: 'restaurantMeals',
  data () {
    return {
      meals: [ { _id: '2' }, { _id: '3' }, { _id: '4' }, { _id: '1' }, { _id: '5' } ],
      isAddMealModalVisible: false
    }
  },
  components: {
    MealList,
    AppModal,
    MealForm
  },
  methods: {
    showAddMealModal () {
      this.isAddMealModalVisible = true
    },
    closeAddMealModal () {
      this.isAddMealModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.wrapper {
  padding: 1%;
}
main {
  border: 1px solid #ccc;
  padding: 3%;
  margin-top: 3%;
  &>div {
    display: flex;
    justify-content: space-between;
    padding: 1%;
    h5 {
      font-weight: bold;
    }
    span {
      color: $orange-color;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.card_main {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin-top: 2%;
  & div {
    display: block;
    img {
      width: 40px;
      height: 40px;
      margin-right: 30px;
      &:hover {
        cursor: default;
        transform: rotate(360deg);
        transition: all 0.4s ease-in-out 0s;
      }
    }
    span {
      margin-right: 30px;
      margin-top: 20px;
      &:hover {
        color: $warning-color;
      }
    }
  }
}
</style>
