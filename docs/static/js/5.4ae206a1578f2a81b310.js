webpackJsonp([5],{"1eKy":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d={name:"personalList",data:function(){return{tableData:[{id:1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",children:[{id:Math.random(),date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]},{id:2,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",hasChildren:!0},{id:3,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",hasChildren:!0},{id:4,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{load:function(e,a,t){console.log(e,a,t),setTimeout(function(){t([{id:Math.random(),date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",hasChildren:!0},{id:Math.random(),date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",children:[{id:Math.random(),date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]}])},1e3)}}},n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("div",[this._v("异步树表格")]),this._v(" "),a("el-table",{attrs:{data:this.tableData,"row-key":"id",lazy:"",load:this.load,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},staticRenderFns:[]};var s=t("VU/8")(d,n,!1,function(e){t("smGo")},null,null);a.default=s.exports},smGo:function(e,a){}});
//# sourceMappingURL=5.4ae206a1578f2a81b310.js.map