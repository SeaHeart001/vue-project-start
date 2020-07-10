<template>
  <div>personal</div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      list: [
        { id: 1, pId: "", name: "id1czcasd" },
        { id: 2, pId: 1, name: "id2aaddad" },
        { id: 3, pId: 1, name: "id3aaddad" },
        { id: 4, pId: 2, name: "id4aaddad" },
        { id: 5, pId: 2, name: "id5aaddad" },
        { id: 6, pId: "", name: "id6asdasd" },
        { id: 7, pId: 6, name: "id7aaddad" },
        { id: 8, pId: 7, name: "id8qwesad" }
      ]
    };
  },
  methods: {
    listTotree(list, id) {
      let result = list
        .filter(item => {
          return item.pId === id;
        })
        .map(res => {
          let resObj = JSON.parse(JSON.stringify(res));
          resObj.children = listTotree(list, res.id);
          return resObj;
        });
      return result;
    },
    
    treeToList(arr, tree) {
      let list = [];
      arr.forEach(item => {
        let itemObj = JSON.parse(JSON.stringify(item));
        itemObj.child = [];
        list.push(itemObj);
        if (item.child && item.child.length > 0) {
          treeToList(list, item.child);
        }
      });
      return list;
    }
  }
};
</script>

<style>
</style>