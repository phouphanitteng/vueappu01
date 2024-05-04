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
      path: '/props',
      name: 'props',
      component: () => import('@/views/props/ParentComponent.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/CustomEvent/UsingEmitParent.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('@/views/slots/ParentSlots.vue')
    },
    {
      path: '/mounted',
      name: 'mounted',
      component: () => import('@/views/Mounted.vue')
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('@/views/dynamiccomponent/DynamicDisplay.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/views/vuex/VuexTodoList.vue')
    },
    {
      path: '/element-component-access',
      name: 'elementcomponentaccess',
      component: () => import('@/views/elementcomponentaccess/ParentComponent.vue')
    },
    {
      path: '/dynamicasyne',
      name: 'dynamdynamicasyne',
      component: () => import('@/views/dynamiccomponent/async/AsyncComponent.vue')
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('@/views/consumeApi/AXIOSView.vue')
    },
    {
      path: '/fetch',
      name: 'fetch',
      component: () => import('@/views/consumeApi/FetchView.vue')
    },
    {
      path: '/tailwindcss',
      name: 'tailwindcss',
      component: () => import('@/views/CSSFramework/TailwindCSS.vue')
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
