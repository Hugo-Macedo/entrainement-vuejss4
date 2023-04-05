import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pays from '../views/Pays.vue'
import fichePays from '../views/fiche-pays.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/pays',
      component: Pays,
      name: 'pays'
    },
    {
      path: '/fiche-pays/:id',
      component: fichePays,
      name: 'fiche-pays'
    }
  ]
})



export default router
