import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shop = () => import('../views/shop/Shop')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path:'/',
    // component:Home
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/category',
    component:Category,
    meta:{
      title:'分类'
    }
  },
  {
    path:'/shop',
    component:Shop,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'我的'
    }
  }
]

const router = new Router({
  routes,
  mode:'history'
})

router.beforeEach((to,from,next) => {
  console.log(to);
  // document.title = to.meta.title;
  document.title = to.matched[0].meta.title;
  next();
})

export default router
