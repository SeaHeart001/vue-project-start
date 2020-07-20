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
Vue.prototype.$httpServer = httpServer

import '@/mockServer/mockServer.js';

import '@/utils/utils'

Vue.config.productionTip = false

// console.log(Vue.prototype, this.$creatRouter,  '123123');
if(Vue.prototype.$storage.get('menuList')){
  //debugger
  Vue.prototype.$creatRouter();
}

router.router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  let authorization = window.localStorage.getItem('authorization');
  
  if(to.name === 'login'){
    
    Vue.prototype.$storage.remove('menuList');
    Vue.prototype.$storage.remove('authorization');
  }

  if(to.name !== 'login'){
    
    if(!authorization){
      Vue.prototype.$confirm('登录凭证无效,请重新登录', '提示', {
        type: 'error'
      }).then(_ => {
        Vue.prototype.$storage.remove('menuList');
        Vue.prototype.$storage.remove('authorization');
        window.location.href = './';
        //next('/');
        //window.location.reload();
      });
      return
    }
    
  }

  if(to.name === null || (to.name && to.path == "/")){
    //console.log('to404', next);
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
