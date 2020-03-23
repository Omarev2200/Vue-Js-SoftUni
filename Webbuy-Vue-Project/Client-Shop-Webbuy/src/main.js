import Vue from "vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Notifications);

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  
  created(){
    this.$store.dispatch('auth')
    
   }
}).$mount("#app");
