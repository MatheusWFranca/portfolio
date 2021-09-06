import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projetos from '../views/Projetos.vue'
import Contato from '../views/Contato.vue'
import Techno from '../views/Techno.vue'
import Animais from '../views/AnimaisFantasticos.vue'
import DevFinances from '../views/DevFinances.vue'
import Clima from '../views/ClimaDiario.vue'
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
},
{
  path: '/projeto/techno',
  name: 'Techno',
  component: Techno,
  props: true,
},
{
  path: '/projeto/animais',
  name: 'Animais Fantasticos',
  component: Animais,
  props: true,
},
{
  path: '/projeto/devfinances',
  name: 'devfinances',
  component: DevFinances,
  props: true,
},
{
  path: '/projeto/clima',
  name: 'Clima Diario',
  component: Clima,
  props: true,
},
{
  path: '/projeto/bisnik',
  name: 'Bisnik',
  component: Bisnik,
  props: true,
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