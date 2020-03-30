import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';

import store from "./store";
import bootstrap  from "./plugins/bootstrap.js";
import notifications from "./plugins/notifications";
import Capitalize from './filters/capitalize';


const API_URL = 'http://localhost:9999/api';

axios.interceptors.request.use(function (config) {
  config.url = `${API_URL}/${config.url}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});
Vue.config.productionTip = false;
  
Vue.filter('capitalize',Capitalize)
new Vue({
  router,
  store,
  bootstrap,
  notifications,

  render: h => h(App),
  

}).$mount("#app");
