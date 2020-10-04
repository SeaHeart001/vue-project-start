<template>
  <el-table
    :id="`t${tableId}`"
    :data="tableData"
    v-bind="$attrs"
  >
  <!-- 拖拽表格我感觉序号没啥意义-->
    <el-table-column v-if="false" label="序号" type="index">
        <template slot-scope="scope">
            <slot v-bind:index="scope.$index" name="index"></slot>
        </template>
    </el-table-column>
    <el-table-column
      v-for="(item, index) in col"
      :key="`col_${index}`"
      :prop="dropCol[index].prop"
      :label="item.label"
    >
      <template slot-scope="scope">
        <slot v-bind:data="tableData[scope.$index]" :name="dropCol[index].prop"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "dragTable",
  props: {
    tableId: {
      type: String,
      default: Math.random().toString().slice(2),
    },

    col: {
      type: Array,
      default: () => {
        return [
          {
            label: "日期",
            prop: "date",
            isSlot: true
          },
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "地址",
            prop: "address",
          },
        ];
      },
    },

    tableData: {
      type: Array,
      default: () => {
        return [
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
        ];
      },
    },
  },
  computed: {
    dropCol: {
      get() {
        return JSON.parse(JSON.stringify(this.col));
      },
      set(val) {
        console.log(val);
      },
    },
  },

  created() {
    this.dropCol = JSON.parse(JSON.stringify(this.col));
  },

  mounted() {
    this.rowDrop();
    this.columnDrop();
  },

  methods: {
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector(
        "#t" + this.tableId + " .el-table__body-wrapper tbody"
      );
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector("#t" + this.tableId + " .el-table__header-wrapper tr");
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
          this.$forceUpdate();
        },
      });
    },
  },
};
</script>

<style>
</style>