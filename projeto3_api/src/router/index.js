import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favoritos from '../views/Favoritos.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Admin_Login from '../views/Admin_Login.vue'
import Erro from '../views/Erro.vue'



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Favoritos',
    name: 'Favoritos',
    component: Favoritos,
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
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/Admin_Login',
    name: 'Admin_Login',
    component: Admin_Login,
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
  },
  {
    path: '*',
    name: 'Erro',
    component: Erro
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



