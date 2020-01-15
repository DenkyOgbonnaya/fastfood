<template>
  <div>
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Meals</li>
        </ol>
      </nav>
    </header>
    <main>
        <div class="meal-filter-desk">
            <FilterMeals :isExpanded="true"/>
        </div>
        <div class="meal-filter-mobi">
            <FilterMeals :isExpanded="false"/>
        </div>
      <section class="all-meals">
       <h2>All Meals</h2>
       <MealList :meals="meals"/>
     </section>
    </main>
  </div>
</template>

<script>
import MealList from '@/components/meals/MealList'
import FilterMeals from '@/components/FilterMeals'
export default {
  name: 'Meals',
  data () {
    return {
      meals: [ { _id: '2' }, { _id: '3' }, { _id: '4' }, { _id: '1' }, { _id: '5' }, { _id: '6' }, { _id: '7' } ]
    }
  },
  components: {
    MealList,
    FilterMeals
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
  main {
    padding: 2%;
    .meal-filter-desk {
      display: none;
    }
    @include desktop() {
      display:flex;
      padding: 2%;
      .meal-filter-desk {
        display: block;
      }
      .meal-filter-mobi {
        display: none;
      }
      .all-meals {
        margin-left: 3%;
        h2 {
          margin-bottom: 2%;
          font-weight: bold;
        }
      }
    }
  }
</style>
