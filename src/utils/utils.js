import router from '@/router';
import Vue from 'vue';

let storage = {
  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key) {
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
      //上面表示如果找到对应路由壳子组件, 则用自己创建的, 没找到则-->
      //生成路由壳子
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
  // console.log(routerList, 'menuListmenuListmenuList');

  // 每次addRoutes添加路由时先初始化路由matcher
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
    //itemObj.children = [];
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

function twoSort(arr){
  //最后当数组长度只有一的时候，不再往下执行
  if (arr.length<=1) {
    return arr;
  }
  var middle=arr.splice(Math.floor(arr.length/2),1);
  var leftArr=[];
  var rightArr=[];
  for(var i=0; i<arr.length; i++){
     if(parseInt(arr[i])<=middle){
       leftArr.push(arr[i]);       //把比中间值小的放一个数组
     }else{
       rightArr.push(arr[i]);      //把比中间值大的放另一个数组
     }
  }
  //concat() 方法用于连接两个或多个数组。
  //再对小数组继续回调上面的分组方法
  return this.twoSort(leftArr).concat(middle, this.twoSort(rightArr));
}

function deepClone(source){
  let targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for(let keys in source){ // 遍历目标
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){ // 如果值是对象，就递归一下
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      }else{ // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      }
    } 
  }
  return targetObj;
}

Vue.prototype.$storage = storage
Vue.prototype.$getRouter = getRouter
Vue.prototype.$creatRouter = creatRouter
