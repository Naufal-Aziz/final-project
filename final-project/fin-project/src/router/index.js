import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/BlogsView.vue'
import AboutView from '../views/AboutView.vue'
import CreatePost from '../views/CreatePost.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/create',
    name: 'createpost',
    component: CreatePost
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
