import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Cart = () => import('@/views/cart/Cart');
const CateGory = () => import('@/views/category/Category');
const Home = () => import('@/views/home/Home');
const Profile = () => import('@/views/profile/Profile');

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
