import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
}

Vue.use(VueRouter)
import HomeRouter from '@/router/routers/home';
import OrderRouter from '@/router/routers/order';
import FindRouter from '@/router/routers/find';
import CenterRouter from '@/router/routers/center';

const routes = [
  ...HomeRouter,
  OrderRouter,
  FindRouter,
  CenterRouter,
  {path:'/',redirect:'/home'}
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
