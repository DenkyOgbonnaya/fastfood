import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowToOrder from "../views/HowToOrder.vue";
import RestaurantDetails from "../views/RestaurantDetails";
import Meals from "../views/Meals.vue";
import MealDetails from "../views/MealDetails.vue";
import Checkout from "../views/Checkout.vue";
import OrderBill from "../views/OrderBill.vue";
import Partnership from "../views/Partnership";
import AddRestaurant from "../views/AddRestaurant";
import AddDriver from "../views/AddDriver";
import UserProfile from "../views/UserProfile";
import ProfileAbout from "@/components/profile/ProfileAbout";
import OrderHistory from "../views/OrderHistory";
import RestaurantMeals from "../views/RestaurantMeals";
import Restaurant from "../views/Restaurant";
import OrderDetails from "../views/OrderDetails";
import MyRestaurants from "@/components/restaurants/MyRestaurants";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/how-to-order",
    name: "howToOrder",
    component: HowToOrder
  },
  {
    path: "/restaurants/:name",
    name: "RestaurantDetails",
    component: RestaurantDetails
  },
  {
    path: "/restaurants/:name/menu",
    name: "restaurant",
    component: Restaurant
  },
  {
    path: "/meals",
    name: "Meals",
    component: Meals
  },
  {
    path: "/meal-details",
    name: "MealsDetails",
    component: MealDetails
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/add-restaurant",
    name: "AddRestaurant",
    component: AddRestaurant,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/order-bill",
    name: "OrderBill",
    component: OrderBill,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/become-a-partner",
    name: "Partnership",
    component: Partnership
  },
  {
    path: "/add-driver",
    name: "AddDriver",
    component: AddDriver,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/order-details",
    name: "orderDetails",
    component: OrderDetails,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/about",
        component: ProfileAbout,
        name: "profileAbout",
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/order-history",
        component: OrderHistory,
        name: "orderHistory",
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/restaurant-meals",
        component: RestaurantMeals,
        name: "restaurantMeals"
      },
      {
        path: "/my-restaurants",
        component: MyRestaurants,
        name: "myRestaurants",
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const { isAuthenticated } = store.getters;
    if (!isAuthenticated) {
      next({
        path: "/",
        params: { nextUrl: to.fullPath }
      });
      store.dispatch("handleAuthModalToggle");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
