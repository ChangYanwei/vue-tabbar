import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shop = () => import('../views/shop/Shop')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router
