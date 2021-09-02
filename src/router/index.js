import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projetos from '../views/Projetos.vue'
import Contato from '../views/Contato.vue'
import Bisnik from '../views/Bisnik.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Projetos,
    children: [{
      path: 'bisnik',
      name: 'bisnik',
      component: Bisnik,
    }]
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router