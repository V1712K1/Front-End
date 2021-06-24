import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Admin_Login from '../views/Admin_Login'
import Administrador from '../views/Admin'
import Register from '../views/Register'
import Contactos from '../views/Contactos'
import Consultas from '../views/Consultas'
import Servicos from '../views/Servicos'
import Erro from '../views/Erro'
import Staff from '../views/Staff'


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
    component: About
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Admin_Login',
    name: 'Admin_Login',
    component: Admin_Login
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Administrador
  },
  {
    path: '/Contactos',
    name: 'Contactos',
    component: Contactos
  },
  {
    path: '/Consultas',
    name: 'Consultas',
    component: Consultas
  },
  {
    path: '/Servicos',
    name: 'Servicos',
    component: Servicos
  },
  {
    path: '/Staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '*',
    name: 'Error',
    component: Erro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
