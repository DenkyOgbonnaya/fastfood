import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowToOrder from '../views/HowToOrder.vue'
import RestaurantDetails from '../views/RestaurantDetails'
import Meals from '../views/Meals.vue'
import MealDetails from '../views/MealDetails.vue'
import Checkout from '../views/Checkout.vue'
import OrderBill from '../views/OrderBill.vue'
import Partnership from '../views/Partnership'
import AddRestaurant from '../views/AddRestaurant'
import AddDriver from '../views/AddDriver'
import UserProfile from '../views/UserProfile'
import ProfileAbout from '@/components/profile/ProfileAbout'
import OrderHistory from '../views/OrderHistory'
import RestaurantMeals from '../views/RestaurantMeals'

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
  },
  {
    path: '/add-restaurant',
    name: 'AddRestaurant',
    component: AddRestaurant
  },
  {
    path: '/order-bill',
    name: 'OrderBill',
    component: OrderBill
  },
  {
    path: '/partner-us',
    name: 'Partnership',
    component: Partnership
  },
  {
    path: '/add-driver',
    name: 'AddDriver',
    component: AddDriver
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    children: [
      { path: '/about', component: ProfileAbout, name: 'profileAbout' },
      { path: '/order-history', component: OrderHistory, name: 'orderHistory' },
      { path: '/restaurant-meals', component: RestaurantMeals, name: 'restaurantMeals' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
