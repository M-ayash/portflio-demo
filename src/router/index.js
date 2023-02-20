import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SollicitatieBrief from '../views/SollicitatieBrief.vue'
import HelpView from '../views/HelpView.vue'
import WeatherView from '../views/WeatherView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
      
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      sensitive: false ,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sollicitatiebrief',
      name: 'sollicitatiebrief',
      sensitive: false ,
      component: SollicitatieBrief
      
    },
    {
      path: '/help',
      name: 'Help',
      component: HelpView
      
    },
    {
      path: '/weather',
      name: 'weather',
      sensitive: false ,
      component: WeatherView
      
    }
  ]
})

export default router
