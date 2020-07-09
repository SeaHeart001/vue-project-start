import router from '@/router';
import Vue from 'vue';

let storage = {
  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key){
    window.localStorage.removeItem(key)
  }
}

function getRouter(menuList, level, parent = {}) {
  level++;

  menuList.forEach(item => {
    let chineseName = item.name;
    item.chineseName = chineseName;
    item.name = item.englishName;

    item.path = item.name
    if (level === 1) {
      item.fullPath = "/module/" + item.path
    } else {
      item.fullPath = parent.fullPath + '/' + item.path
    }

    let component = router.menu[item.englishName];
    if (item.isParent == 1) {
      //!component && item.isParent == 1
      component = Vue.component(item.name, {
        template: '<router-view></router-view>'
      })
    }
    item.component = component;
    if (item.children && item.children.length > 0) {
      item.redirect = item.fullPath + '/' + item.children[0].englishName,
        getRouter(item.children, level, item)
    }
  });
  return menuList
}

function creatRouter(menuData, callback) {
  //debugger
  let data = menuData || storage.get('menuList');
  let myRouter = getRouter(data, 0);
  let routerList = [
    {
      path: "/module",
      name: "module",
      component: router.menu.module,
      redirect: myRouter[0].fullPath,
      children: myRouter
    }
  ];
  console.log(routerList, 'menuListmenuListmenuList');
  router.router.addRoutes(routerList);
  callback && callback()
}

Vue.prototype.$storage = storage
Vue.prototype.$getRouter = getRouter
Vue.prototype.$creatRouter = creatRouter
