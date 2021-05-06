import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDpqv3AVSyxhglRoBZg0rEDEEJPtW9k6gM",
  authDomain: "projetoapi-f1c69.firebaseapp.com",
  projectId: "projetoapi-f1c69",
  storageBucket: "projetoapi-f1c69.appspot.com",
  messagingSenderId: "78816939743",
  appId: "1:78816939743:web:26c3ea1f28f986c015636a",
  measurementId: "G-ZJJM2WD0LW"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
