import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    children: [
          {
            path: '',
            name: 'projectsList',
            component: () => import('../views/projects/ProjectsList.vue')
          },
          {
            path: 'stageWebScraping',
            name: 'stageWebScraping',
            component: () => import('../views/projects/IUT/StageWebScraping.vue')
          },
          {
            path: 'memoryGame',
            name: 'memoryGame',
            component: () => import('../views/projects/Jeux/MemoryGame.vue')
          }
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
