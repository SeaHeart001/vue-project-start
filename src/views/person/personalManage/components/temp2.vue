<template>
  <el-tree
    :data="data"
    show-checkbox
    node-key="id"
    :props="defaultProps"
  >
  <span class="custom-tree-node" slot-scope="{ node, data }">
     <span>{{node.label.name}}</span>
  </span>
  </el-tree>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: {name: "一级 1"},
          children: [
            {
              id: 4,
              label: {name: "二级 1-1"},
              children: [
                {
                  id: 9,
                  label: {name: "三级 1-1-1"},
                },
                {
                  id: 10,
                  label: {name: "三级 1-1-2"},
                },
              ],
            },
          ],
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
};
</script>