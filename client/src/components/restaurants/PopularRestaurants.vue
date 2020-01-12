<template>
    <article v-if="popularRestaurants.length">
      <header>
        <h5>Popular Restaurants</h5>
      </header>
        <section
          v-for="restaurant in popularRestaurants"
          :key="restaurant._id"
        >
           <figure class="restaurant-img">
               <img src="~@/assets/images/img_1.svg" alt="restaurant">
           </figure>
           <div class="details">
               <h6>{{restaurant.name}}</h6>
               <small>{{restaurant.location}}</small>
               <div class="rating text-muted">Rating: <span>4.5</span></div>
           </div>
        </section>
    </article>
</template>

<script>
const popularRestaurants = [
  { _id: '1', name: 'Chicken republic', location: 'water works road' },
  { _id: '2', name: 'Chicken republic', location: 'water works road' },
  { _id: '3', name: 'Chicken republic', location: 'water works road' },
  { _id: '4', name: 'Chicken republic', location: 'water works road' },
  { _id: '5', name: 'Chicken republic', location: 'water works road' }
]
export default {
  name: 'PopularRestaurants',
  data () {
    return {
      popularRestaurants
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

  article {
    padding: 5px;
    header h5 {
      font-weight: bold;
      margin-bottom: map-get($margins, bottom );
      margin-top: map-get($margins, top );
    }
    section {
      display: flex;
      border: 1px solid #ccc;
      padding: 5px;
      margin-bottom: 5px;
      .restaurant-img {
        img {
          width:80px;
          height: 50px;
        }
      }
      .details .rating span {
        background: #f8cc06;
        max-height: 20px;
        max-width: 30px;
        border-radius: 7px;
        padding: 2px;
        color: $light-color;
        font-size: 12px;
      }
    }
  }
</style>
