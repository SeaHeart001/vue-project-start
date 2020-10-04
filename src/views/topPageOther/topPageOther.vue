<template>
  <div>
    <dragTable
      :tableData="tableData"
      border
      row-key="id"
      align="left"
    >
      <template slot="index" slot-scope="scope">{{scope.index}}</template>
      <template slot="date" slot-scope="scope">{{scope.data.date}}</template>
      <template slot="name" slot-scope="scope">{{scope.data.name}}</template>
      <template slot="address" slot-scope="scope">{{scope.data.address}}</template>
    </dragTable>
  </div>
</template>

<script>
import dragTable from '@/common/dragTable/dragTable';

export default {
  name: "topPageOther",

  data(){
    return {
      tableData:[
          {
            id: "1",
            date: "2016-05-02",
            name: "王小虎1",
            address: "上海市普陀区金沙江路 100 弄",
          },
          {
            id: "2",
            date: "2016-05-04",
            name: "王小虎2",
            address: "上海市普陀区金沙江路 200 弄",
          },
          {
            id: "3",
            date: "2016-05-01",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 300 弄",
          },
          {
            id: "4",
            date: "2016-05-03",
            name: "王小虎4",
            address: "上海市普陀区金沙江路 400 弄",
          },
        ]
    }
  },

  components: {
    dragTable
  },
  
  methods: {

  },
};
</script>

<style>
</style>