import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase';


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAzJYUd2Uv3YJOfYbCvFs-82v31j7IAbho",
  authDomain: "projeto-veterinario.firebaseapp.com",
  projectId: "projeto-veterinario",
  storageBucket: "projeto-veterinario.appspot.com",
  messagingSenderId: "1043737971550",
  appId: "1:1043737971550:web:a0a084f39f2d182edf5dcf",
  measurementId: "G-JVWR7LJFP2"
};

firebase.initializeApp(firebaseConfig);



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
