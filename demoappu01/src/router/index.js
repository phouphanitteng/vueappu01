import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Watcher from '@/views/Watcher.vue'
import EventHandlers from '@/views/EventHandlers.vue'
import PageA from '@/views/page/PageA.vue'
import PageB from '@/views/page/PageB.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/watched',
      name: 'watched',
      component: Watcher
    },
    {
      path: '/eventhandler',
      name: 'eventhandler',
      component: EventHandlers
    },
    {
      path: '/pageA',
      name: 'pageA',
      component: PageA
    },
    {
      path: '/pageB',
      name: 'pageB',
      component: PageB
    },
    {
      path: '/computed',
      name: 'computed',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
