// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import _ from 'lodash';

import httpServer from '@/http/http';
Vue.prototype.$httpServer = httpServer;

import '@/mockServer/mockServer.js';

import '@/utils/utils'

Vue.config.productionTip = false

// console.log(Vue.prototype, this.$creatRouter,  '123123');
const tool = Vue.prototype;
if(tool.$storage.get('menuList')){
  //debugger
  tool.$creatRouter();
}

router.router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  let authorization = window.localStorage.getItem('authorization');
  
  if(to.name === 'login'){
    
    tool.$storage.remove('menuList');
    tool.$storage.remove('authorization');
  }

  if(to.name !== 'login'){
    
    if(!authorization){

      if(from.name === 'login'){
        next('/');
        return
      }
      
      tool.$confirm('登录凭证无效,请重新登录', '提示', {
        type: 'error'
      }).then(_ => {
        //Vue.prototype.$storage.remove('menuList');
        tool.$storage.remove('authorization');
        window.location.href = './';
        //next('/');
        //window.location.reload();
      });
      return
    }
  }

  if(to.matched.length === 0 && from.name){
    next('/404');
    return
  }

  next()
  
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router.router,
  components: { App },
  template: '<App/>'
})
