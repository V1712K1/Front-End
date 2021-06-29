import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin_Login from '../views/Admin_Login'
import Administrador from '../views/Admin'
import Register from '../views/Register'
import Consultas from '../views/Consultas'
import Erro from '../views/Erro'
import Medicamentos from '../views/Medicamentos'
import Staff from '../views/Staff'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/Consultas',
    name: 'Consultas',
    component: Consultas
  },
  {
    path: '/Staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/Medicamentos',
    name: 'Medicamentos',
    component: Medicamentos
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
