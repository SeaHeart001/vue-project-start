<template>
  <el-table :id="`t${tableId}`" :data="tableData" v-bind="$attrs">
    <!-- 拖拽表格我感觉序号没啥意义-->
    <template v-for="(item, index) in col">
      <!-- 操作列/自定义列 -->
      <el-table-column
        v-if="item.isSlot"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"
      >
        <template v-if="item.isSlotHeader" slot="header"> 
          <slot :name="item.prop + `Header`" :data="item"></slot>
        </template>
        <template slot-scope="scope"> 
          <slot :name="item.prop" :data="tableData[scope.$index]"></slot>
        </template>
        
      </el-table-column>
      
      <!-- 普通列 -->
      <el-table-column
        v-else
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"
        v-bind="item"
      >
      </el-table-column>
    </template>
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
        return [];
      },
    },

    tableData: {
      type: Array,
      default: () => {
        return [];
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
      const wrapperTr = document.querySelector(
        "#t" + this.tableId + " .el-table__header-wrapper tr"
      );
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          const colMaxLength = this.dropCol.length;
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