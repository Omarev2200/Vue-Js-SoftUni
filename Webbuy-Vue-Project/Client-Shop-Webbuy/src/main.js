import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import bootstrap  from "./plugins/bootstrap.js";
import notifications from "./plugins/notifications";
import Capitalize from './filters/capitalize';

Vue.config.productionTip = false;
  
Vue.filter('capitalize',Capitalize)
new Vue({
  router,
  store,
  bootstrap,
  notifications,

  render: h => h(App),
  

}).$mount("#app");
