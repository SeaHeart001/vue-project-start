<template>
  <div>
    <div>异步树表格</div>
    <el-table
      :data="tableData"
      row-key="id"
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "personalList",
  data() {
    return {
      tableData: [
        {
          id: Math.random(),
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          children: [
            {
              id: Math.random(),
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
            },
          ],
        },
        {
          id: Math.random(),
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          hasChildren: true,
        },
        {
          id: Math.random(),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          hasChildren: true,
        },
        {
          id: Math.random(),
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },

  methods: {
    
    load(tree, treeNode, resolve) {
      console.log(tree, treeNode, resolve);
      setTimeout(() => {
        resolve([
          {
            id: Math.random(),
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            hasChildren: true,
          },
          {
            id: Math.random(),
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            children: [
              {
                id: Math.random(),
                date: "2016-05-01",
                name: "王小虎",
                address: "上海市普陀区金沙江路 1519 弄",
              },
            ],
          },
        ]);
      }, 1000);
    },
  },
};
</script>

<style>
</style>