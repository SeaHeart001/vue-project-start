import Vue from 'vue'
import Router from 'vue-router'
import login from '@/default/login'
import page404 from '@/default/404'
//添加一个默认壳子module,方便修改布局
import module from '@/default/module'

import personModule from '@/views/person';
//console.log(personModule, 'personModule')

//解决重复点击路由报错问题START
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
//解决重复点击路由报错问题END

Vue.use(Router)

let menu = {
  ...personModule
}
//添加一个默认壳子module,方便修改布局
menu.module = module;

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: '404',
      component: page404
    }
  ]
})

export default {router, menu}
