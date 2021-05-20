import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import Produtos from '../views/Produtos.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import firebase from 'firebase'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Produto/:id',
    props: true,
    name: 'Produto',
    component: Produto,
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/Produtos',
    name: 'Produtos',
    component: Produtos,
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      requiresAuth: false,
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta:{
      requiresAuth: false,
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;
   if (requiresAuth && currentUser == true) { 
    next('/Login');
  } else {
     next();
  }
});

export default router



