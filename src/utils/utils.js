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
    },
    //动态添加404放在最后，用*匹配
    {
      path: '*',
      redirect: '/404',
      //component: router.menu.page404,
    }
    
  ];
  //console.log(routerList, 'menuListmenuListmenuList');

  //每次addRoutes添加路由时先初始化路由matcher
  router.router.matcher = router.routerInit().matcher;
  router.router.addRoutes(routerList);
  callback && callback()
}

function listTotree(list, id) {
  let result = list
    .filter(item => {
      return item.pId === id;
    })
    .map(res => {
      let resObj = JSON.parse(JSON.stringify(res));
      resObj.children = listTotree(list, res.id);
      return resObj;
    });
  return result;
}

function treeToList(tree, arr) {
  let list = arr || [];
  tree.forEach(item => {
    let itemObj = JSON.parse(JSON.stringify(item));
    itemObj.children = [];
    list.push(itemObj);
    if (item.children && item.children.length > 0) {
      treeToList(item.children, list);
    }
  });
  return list;
}

//returnAllParent, returnParent有用到闭包, 请注意释放闭包

function returnParent() {
  let result;
  return function searchParent(searchId, treeList, pId){
    treeList.forEach(item => {
      if (item.id === searchId) {
        result = pId;
        //console.log(testId);
      } else {
        item.child &&
          item.child.length &&
          searchParent(searchId, item.child, item.id);
      }
    });
    return result
  }
}

function returnParent2(searchId, treeList, pId) {
  let result;
  function searchParent(searchId, treeList, pId) {
    treeList.forEach(item => {
      if (item.id === searchId) {
        result = pId;
        //console.log(testId);
      } else {
        item.child &&
          item.child.length &&
          searchParent(searchId, item.child, item.id);
      }
    });
  };
  searchParent(searchId, treeList, pId)
  return result
}

function returnAllParent(treeList) {
  let result = [];
  let _treeList = JSON.parse(JSON.stringify(treeList));
  return function searchAllParent(searchId, treeList, pData) {
    treeList.forEach(item => {
      if (item.id === searchId) {
        //console.log(testId);
        if (pData&&pData.id) {
          result.push(pData);
          searchAllParent(pData.id, _treeList);
        }
      } else {
        item.child &&
          item.child.length &&
          searchAllParent(searchId, item.child, item);
      }
    });
    return result;
  };
}

function returnAllParent2(searchId, treeList, pData) {
  let result = [];
  let _treeList = JSON.parse(JSON.stringify(treeList));
  function searchAllParent(searchId, treeList, pData) {
    treeList.forEach(item => {
      if (item.id === searchId) {
        //console.log(testId);
        if (pData && pData.id) {
          result.push(pData);
          searchAllParent(pData.id, _treeList);
        }
      } else {
        item.child &&
          item.child.length &&
          searchAllParent(searchId, item.child, item);
      }
    });
  };
  searchAllParent(searchId, treeList, pData)
  return result
}

Vue.prototype.$storage = storage
Vue.prototype.$getRouter = getRouter
Vue.prototype.$creatRouter = creatRouter
