webpackJsonp([3],{"+cgv":function(e,t){},"3f40":function(e,t){},"4qOc":function(e,t){},"BZg+":function(e,t){},MIp3:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("NYxO"),i={namespaced:!0,state:{appMsg:"appMsg....."},getters:{computedMsg:function(e,t){return e.appMsg},computedGetterMsg:function(e,t){return t.computedMsg+"-"+e.appMsg}},mutations:{CONSOLELOG:function(e,t){console.log(e,t)}},actions:{actionsConsoleLog:function(e,t){(0,e.commit)("CONSOLELOG",t)}}};o.default.use(a.b);var r=new a.b.Store({modules:{app:i}}),s=n("Dd8w"),u=n.n(s),l=Object(a.a)("app"),c=l.mapState,p=l.mapGetters,m=l.mapMutations,d=l.mapActions,h={name:"App",computed:u()({},c(["appMsg"]),p(["computedGetterMsg"])),methods:u()({},m(["CONSOLELOG"]),d(["actionsConsoleLog"])),mounted:function(){console.log(this.appMsg,this.computedGetterMsg,"vuexxx"),this.actionsConsoleLog({a:123});var e=new FormData,t=new File([],"file");e.append("a",1),e.append("file",t)}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"test-class-1",attrs:{id:"app-wrap"}},[t("router-view")],1)},staticRenderFns:[]};var g=n("VU/8")(h,f,!1,function(e){n("BZg+")},null,null).exports,v=n("/ocq"),w={name:"HelloWorld",components:{},data:function(){return{msg:"Vue.js App"}},props:{testList:{type:Array,default:function(){return[]}}},mounted:function(){},methods:{toLogin:function(){this.getMenuServer({a:1})},getMenuServer:function(e){var t=this;this.$httpServer({method:"post",url:"/api/menu",data:this.$qs(e),loading:{lock:!0,text:"Loading....",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}}).then(function(e){t.$storage.set("menuList",e.data),t.$creatRouter(e.data,function(){t.$router.push({name:e.data[0].name})})})}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"user-login-entry"},[t("h1",[this._v("vue start")]),this._v(" "),t("el-input"),this._v(" "),t("el-input"),this._v(" "),t("el-button",{on:{click:this.toLogin}},[this._v("login")])],1)])},staticRenderFns:[]};var M=n("VU/8")(w,y,!1,function(e){n("h2JR")},null,null).exports,P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-wrap"},[t("h1",[this._v("\n    404\n  ")])])}]};var b=n("VU/8")({},P,!1,function(e){n("s9a8")},"data-v-5e40e52b",null).exports,_={name:"menuItem",props:{menuMap:{type:Object,default:function(){}},toRouter:Function},methods:{clickRouter:function(e){this.toRouter(e)}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deal-menu-maximum"},[e.menuMap.isParent?n("el-submenu",{directives:[{name:"show",rawName:"v-show",value:e.menuMap.isShowPage,expression:"menuMap.isShowPage"}],key:e.menuMap.component,attrs:{"popper-append-to-body":!0,index:e.menuMap.component},on:{click:function(t){return e.clickRouter(e.menuMap)}}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",[e._v(e._s(e.menuMap.menuName))])]),e._v(" "),e._l(e.menuMap.children,function(t){return[t?n("menuItem",{key:t.id,attrs:{toRouter:e.toRouter,menuMap:t}}):e._e()]})],2):n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuMap.isShowPage,expression:"menuMap.isShowPage"}],key:e.menuMap.component,attrs:{"popper-append-to-body":!0,index:e.menuMap.component},on:{click:function(t){return e.clickRouter(e.menuMap)}}},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menuMap.menuName))])])],1)},staticRenderFns:[]};var L={name:"menuNav",data:function(){return{}},mounted:function(){},components:{menuItem:n("VU/8")(_,$,!1,function(e){n("iD4i")},null,null).exports},computed:{menuList:function(){return this.$storage.get("menuList")}},methods:{handleOpen:function(e,t){console.log(e,t,"OPEN")},handleClose:function(e,t){console.log(e,t,"CLOSE")},toRouter:function(e){console.log(e),this.$router.push({name:e.component})}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"menu-nav-wrap",attrs:{mode:"horizontal","menu-trigger":"hover","default-active":e.$route.name},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.menuList,function(t){return[n("menuItem",{key:t.id,attrs:{toRouter:e.toRouter,menuMap:t}})]})],2)},staticRenderFns:[]};var N={components:{MenuNav:n("VU/8")(L,S,!1,function(e){n("hqiG")},null,null).exports},computed:{menuList:function(){return this.$storage.get("menuList")}},data:function(){return{btnMsgType:["info","success","error","warning"]}},methods:{test:function(e){console.log(this.$store,this.$store.state.app.appMsg,111),this.$store.commit("app/CONSOLELOG"),this.$store.dispatch("app/actionsConsoleLog")},exit:function(){var e=this;this.$confirm.warning({title:"提示",message:"确认退出?"}).then(function(t){e.$storage.remove("authorization"),window.location.href="./"}).catch(function(e){})}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-wrap"},[n("div",[n("el-button",{on:{click:e.exit}},[e._v("exit")]),e._v(" "),e._l(e.btnMsgType,function(t,o){return n("el-button",{key:o,on:{click:function(n){return e.test(t)}}},[e._v(e._s(t))])})],2),e._v(" "),n("div",[n("MenuNav",{attrs:{list:e.menuList}})],1),e._v(" "),n("div",{directives:[{name:"watermark",rawName:"v-watermark"}]},[n("router-view")],1)])},staticRenderFns:[]};var C=n("VU/8")(N,x,!1,function(e){n("MIp3")},null,null).exports,U={personal:function(){return n.e(0).then(n.bind(null,"f9EW"))},personalList:function(){return n.e(0).then(n.bind(null,"1eKy"))},personalManage:function(){return n.e(0).then(n.bind(null,"wmwF"))},personCount:function(){return n.e(0).then(n.bind(null,"hL3B"))},friendCount:function(){return n.e(0).then(n.bind(null,"cGQv"))},payCount:function(){return n.e(0).then(n.bind(null,"qRaq"))}},O={systemManage:function(){return n.e(1).then(n.bind(null,"UzpL"))},systemModel:function(){return n.e(1).then(n.bind(null,"8Bni"))}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},k=n("VU/8")(null,R,!1,null,null,null).exports,E=v.a.prototype.replace;v.a.prototype.replace=function(e){return E.call(this,e).catch(function(e){return e})};var V=v.a.prototype.push;v.a.prototype.push=function(e){return V.call(this,e).catch(function(e){return e})},o.default.use(v.a);var z=u()({},U,O,{topPageOther:k});z.module=C,z.page404=b;var I=function(){return new v.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:M},{path:"/404",name:"404",component:b}]})},F={router:I(),menu:z,routerInit:I},q=n("zL8q"),G=n.n(q),A=(n("tvR6"),n("ufP2")),D={install:function(e,t){e.prototype.$dispatch=A.a.methods.dispatch,e.prototype.$broadcast=A.a.methods.broadcast}},T={info:"提示",success:"成功",error:"错误",warning:"警告"},j=["$alert","$confirm"],J={install:function(e,t){for(var n=function(t){var n=j[t],o=function(t){e.prototype[n][t]=function(o){return"string"==typeof o?e.prototype[n](o,T[t],{type:t}):(o.type=t,e.prototype[n](o.message||"..",o.title||T[t],o))}};for(var a in T)o(a)},o=0;o<j.length;o++)n(o)}},B=document.createElement("canvas");B.width="300",B.height="200";var H=B.getContext("2d");H.font="bold 18px 宋体",H.fillStyle="rgba(153, 153, 153, 0.3)",H.rotate(Math.PI/10),H.fillText("VUE-PROJECT-START",50,0),H.fillText("haohai",50,30),H.stroke();var W=B.toDataURL("image/png"),Q=document.createElement("div");Q.style.backgroundImage='url("'+W+'")',Q.style.backgroundPosition="0 0, 150px 150px",Q.style.position="absolute",Q.style.width="100vw",Q.style.height="100vh",Q.style.zIndex="99999",Q.style.top="0",Q.style.left="0",Q.style.pointerEvents="none";var Y={install:function(e,t){e.directive("watermark",function(e){!function(e){e.appendChild(Q)}(e)})}},Z=n("G0J2"),K=n.n(Z),X=(n("3f40"),n("4qOc"),n("+cgv"),n("M4fF"),n("PFUz"),n("//Fk")),ee=n.n(X),te=n("mtWM"),ne=n.n(te),oe=n("mw3O"),ae=n.n(oe);console.log(basePath,"basePath");var ie=ne.a.create(basePath),re=void 0;ie.interceptors.request.use(function(e){if(e.loading){var t=e.loading;t instanceof Object&&!(t instanceof Array)?re=o.default.prototype.$loading(t):!0===t&&(re=o.default.prototype.$loading())}return e.headers.authorization=window.localStorage.getItem("authorization")||"authorization",e},function(e){return confirm("请求服务异常request"),ee.a.reject(e)}),ie.interceptors.response.use(function(e){return 403===e.code?(confirm("登录凭证过期或异常, 请重新登录"),void(window.location.href="./")):(e.headers.authorization?window.localStorage.setItem("authorization",e.headers.authorization):window.localStorage.setItem("authorization","authorization"),!0===e.config.configData?(re&&re.close(),e):(re&&re.close(),e.data))},function(e){return confirm("请求服务异常response"),ee.a.reject(e)}),o.default.prototype.$qs||(o.default.prototype.$qs=function(e){return ae.a.stringify(e)});var se=ie,ue=n("zNUS"),le=n.n(ue),ce=n("xLU7"),pe=n.n(ce);le.a.setup({timeout:"100-2000"}),le.a.mock("/api/test","post",{state:1,msg:"测试模拟接口"}),le.a.mock("/api/menu","post",{state:1,data:pe.a.menuList});n("pFYg");var me=n("mvHQ"),de=n.n(me),he={get:function(e){return JSON.parse(window.localStorage.getItem(e))},set:function(e,t){window.localStorage.setItem(e,de()(t))},remove:function(e){window.localStorage.removeItem(e)}};function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t++,e.forEach(function(e){console.log(e.pathUrl),e.name=e.pathUrl,e.path=e.pathUrl,e.fullPath=1===t?"/module/"+e.path:n.fullPath+"/"+e.path;var a=F.menu[e.pathUrl];1==e.isParent&&(
//!component && item.isParent == 1
a=o.default.component(e.name,{template:"<router-view></router-view>"})),e.component=a,e.children&&e.children.length>0&&(e.redirect=e.fullPath+"/"+e.children[0].pathUrl,fe(e.children,t,e))}),e}o.default.prototype.$storage=he,o.default.prototype.$getRouter=fe,o.default.prototype.$creatRouter=function(e,t){var n=fe(e||he.get("menuList"),0),o=[{path:"/module",name:"module",component:F.menu.module,redirect:n[0].fullPath,children:n},{path:"*",redirect:"/404"}];F.router.matcher=F.routerInit().matcher,F.router.addRoutes(o),t&&t()},o.default.use(G.a),o.default.use(D),o.default.use(J),o.default.use(Y),o.default.use(K.a),o.default.prototype.$httpServer=se,o.default.config.productionTip=!1;var ge=o.default.prototype;ge.$storage.get("menuList")&&ge.$creatRouter(),F.router.beforeEach(function(e,t,n){console.log(e,t,n);var o=window.localStorage.getItem("authorization");if("login"===e.name&&(ge.$storage.remove("menuList"),ge.$storage.remove("authorization")),"login"!==e.name&&!o)return"login"===t.name?void(window.location.href="./"):void ge.$confirm("登录凭证无效,请重新登录","提示",{type:"error"}).then(function(e){ge.$storage.remove("authorization"),window.location.href="./"});0===e.matched.length&&t.name?n("/404"):n()}),new o.default({el:"#app",store:r,router:F.router,components:{App:g},template:"<App/>"})},h2JR:function(e,t){},hqiG:function(e,t){},iD4i:function(e,t){},s9a8:function(e,t){},tvR6:function(e,t){},xLU7:function(e,t){e.exports={menuList:[{menuName:"包节点菜单一",id:1,pathUrl:"person",component:"person",isShowPage:1,isParent:1,isValid:1,icon:"el-icon-menu",children:[{menuName:"个人中心首页",id:3,pathUrl:"personal",component:"personal",isShowPage:1,isParent:0,isValid:1,icon:"el-icon-menu"},{menuName:"个人统计",id:5,pathUrl:"personCount",component:"personCount",isShowPage:1,isParent:1,isValid:1,icon:"el-icon-menu",children:[{menuName:"消费统计",id:6,pathUrl:"payCount",component:"payCount",isShowPage:0,isParent:0,isValid:1,icon:"el-icon-menu"},{menuName:"好友统计",id:7,pathUrl:"friendCount",component:"friendCount",isShowPage:1,isParent:0,isValid:1,icon:"el-icon-menu"}]},{menuName:"个人列表",id:11,pathUrl:"personalList",component:"personalList",isShowPage:1,isParent:0,isValid:1,icon:"el-icon-menu"},{menuName:"个人管理",id:12,pathUrl:"personalManage",component:"personalManage",isShowPage:1,isParent:0,isValid:0,icon:"el-icon-menu"}]},{menuName:"包节点菜单二",id:2,pathUrl:"system",component:"system",isShowPage:1,isParent:1,isValid:1,icon:"el-icon-menu",children:[{menuName:"系统首页",id:4,pathUrl:"systemManage",component:"systemManage",isShowPage:1,isParent:0,isValid:1,icon:"el-icon-menu"},{menuName:"系统模型",id:8,pathUrl:"systemModel",component:"systemModel",isShowPage:1,isParent:0,isValid:1,icon:"el-icon-menu"},{menuName:"系统模型详情",id:9,pathUrl:"systemModelDetial",component:"systemModelDetail",isShowPage:0,isParent:0,isValid:1,icon:"el-icon-menu"},{menuName:"其他模块",id:10,pathUrl:"systemOther",component:"systemOther",isShowPage:0,isParent:0,isValid:0,icon:"el-icon-menu"}]},{menuName:"一级页面菜单",id:11,pathUrl:"topPageOther",component:"topPageOther",isShowPage:1,isParent:0,isValid:1,icon:"el-icon-menu"}],treeList:[{id:1,menuName:"aa",child:[{id:2,menuName:"ab",child:[{id:5,menuName:"abc",child:[]}]}]},{id:3,menuName:"ba",child:[{id:4,menuName:"bb",child:[]}]}]}}},["NHnr"]);
//# sourceMappingURL=app.chunk.js.map