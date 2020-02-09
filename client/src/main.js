import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueNoty from "vuejs-noty";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vuejs-noty/dist/vuejs-noty.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import apollo from "./apolloClient";
import "./assets/scss/index.scss";

Vue.use(BootstrapVue);
Vue.use(VueNoty);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.prototype.$apollo = apollo;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
