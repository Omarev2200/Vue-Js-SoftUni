import Vue from 'vue';
import firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import {store} from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(BootstrapVue);    

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDOcbLOmFXr-se2cGQLSvmRASSnt8joMe4",
  authDomain: "webbuy-c3d5a.firebaseapp.com",
  databaseURL: "https://webbuy-c3d5a.firebaseio.com",
  projectId: "webbuy-c3d5a",
  storageBucket: "webbuy-c3d5a.appspot.com",
  messagingSenderId: "1052783882854",
  appId: "1:1052783882854:web:fdbbb94a76434e828633a7",
  measurementId: "G-YQ7VSQCHBM"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
