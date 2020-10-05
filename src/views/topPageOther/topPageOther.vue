<template>
  <div>
    <dragTable  
      :tableData="tableData" 
      :col="col" 
      border 
      row-key="id" 
      align="left">
      <template slot="oprationHeader">
        <span>操作111222</span>
      </template>
      <template slot="opration" slot-scope="scope">
        <el-button size="mini" @click="showId(scope.data.id)">{{
          "alert" + scope.data.id
        }}</el-button>
      </template>
    </dragTable>
  
  </div>
</template>

<script>
import dragTable from "@/common/dragTable/dragTable";

export default {
  name: "topPageOther",

  data() {
    return {
      tableData: [
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
      ],

      col: [
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "姓名",
          prop: "name",
        },
        {
          label: "地址",
          prop: "address",
        },
        {
          label: "操作",
          prop: "opration",
          isSlot: true,
          isSlotHeader: true,
        },
      ],
    };
  },

  components: {
    dragTable,
  },

  methods: {
    showId(id) {
      alert(id);
      console.log(this.$children[0].dropCol)
    },
  },
};
</script>

<style>
</style>