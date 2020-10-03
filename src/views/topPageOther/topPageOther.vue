<template>
  <div>
    <div>拖拽表格</div>
    <div>
      <el-table :data="tableData" border row-key="id" align="left">
        <el-table-column
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="dropCol[index].prop"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
      <pre style="text-align: left">
      {{ dropCol }}
    </pre
      >
      <hr />
      <pre style="text-align: left">
      {{ tableData }}
    </pre
      >
    </div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "topPageOther",
  data() {
    return {
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
      ],
      dropCol: [
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
      ],
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

      tableData2: [
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

  mounted() {
    this.dropCol = JSON.parse(JSON.stringify(this.col));
    this.rowDrop();
    this.columnDrop();
  },

  methods: {
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
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
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        },
      });
    },

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