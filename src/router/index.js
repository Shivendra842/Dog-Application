import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import listAllBreed from '@/components/breedList/listAllBreed.vue'
import searchBreeds from '@/components/breedSearch/searchBreeds.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/searchBreeds',
    name:'searchBreeds',
    component:searchBreeds
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
