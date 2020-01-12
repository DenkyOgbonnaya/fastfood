import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowToOrder from '../views/HowToOrder.vue'
import RestaurantDetails from '../views/RestaurantDetails.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
