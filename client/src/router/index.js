import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowToOrder from '../views/HowToOrder.vue'
import RestaurantDetails from '../views/RestaurantDetails'
import Meals from '../views/Meals.vue'
import MealDetails from '../views/MealDetails.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/how-to-order',
    name: 'howToOrder',
    component: HowToOrder
  },
  {
    path: '/restaurant-details',
    name: 'RestaurantDetails',
    component: RestaurantDetails
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/meal-details',
    name: 'MealsDetails',
    component: MealDetails
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
