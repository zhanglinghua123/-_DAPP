import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../View/Home"
import ListNet from "@/views/User/ListNet";
import List_Seller from "@/views/User/List_Seller";
import Create_Net from "@/views/User/Create_Net";
import ListAllNet from "@/views/User/ListAllNet";
import ListmySeller from "@/views/User/ListmySeller";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/Home",
    name:"Home",
    component: Home
  },
  {
    path: '/User',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    children:[
      {
    // 当 /user/:id/profile 匹配成功，
    // UserProfile 会被渲染在 User 的 <router-view> 中
         path: 'list',
         component: ListNet,
      },
      {
    // 当 /user/:id/posts 匹配成功
    // UserPosts 会被渲染在 User 的 <router-view> 中
         path: 'seller',
         component: List_Seller,
      },
      {
        path:'create',
        component: Create_Net,
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'listall',
        component: ListAllNet,
      },
      {
        path:'listmysell',
        component: ListmySeller,
      }
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
