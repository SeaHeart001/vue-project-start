<template>
  <div>
    <dragTable
      v-if="showTable"
      @reloadTable="reloadTable"
      :tableData="tableData"
      :col.sync="col"
      border
      row-key="id"
      align="left"
      @sort-change="sortchange"
      @filter-change="filterChange"
    >
      <template slot="dateHeader">
        <span>日期表头</span>
      </template>
      <template slot="date" slot-scope="scope">
        {{ "日期: " + scope.data.date }}
      </template>

      <template slot="oprationHeader">
        <span>操作自定义</span>
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
      showTable: true,
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
          isSlot: true,
          isSlotHeader: true,
        },
        {
          label: "姓名",
          prop: "name",
          columnKey: "name",
          filters: [
            { text: "王小虎11", value: "王小虎1" },
            { text: "王小虎22", value: "王小虎2" },
            { text: "王小虎33", value: "王小虎3" },
            { text: "王小虎44", value: "王小虎4" }
          ],
          filterMethod: function(value, row, column){
            //为什么进不去这个方法呢呢？
            const property = column["property"];
            console.log(value, row, column, 'filterMethod');
          },
        },
        {
          label: "地址",
          prop: "address",
          sortable: true
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
    sortchange({ column, prop, order }){
      console.log({ column, prop, order })
    },
    filterChange(filter){
      console.log(filter)
    },
    showId(id) {
      alert(id);
    },

    reloadTable() {
      this.showTable = false;
      this.$nextTick((_) => {
        this.showTable = true;
      });
    },
  },
};
</script>

<style>
</style>