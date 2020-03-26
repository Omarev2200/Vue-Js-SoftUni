import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";
import store from "./store";
import bootstrap from "./plugins/bootstrap.js";
import notifications from "./plugins/notifications";

Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  store,
  bootstrap,
  notifications,

  render: h => h(App),
  

}).$mount("#app");
