import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import axios from "axios";
import store from "./store";
import bootstrap from "./plugins/bootstrap.js";
import notifications from "./plugins/notifications";
import Capitalize from "./filters/capitalize";
import { sync } from "vuex-router-sync";
sync(store, router);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.filter("capitalize", Capitalize);
const API_URL = "http://localhost:9999/api";

axios.interceptors.request.use(
  function(config) {
    config.url = `${API_URL}/${config.url}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

new Vue({
  el: "#app",
  store,
  bootstrap,
  notifications,
  router,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("isAuth");
  },
});
