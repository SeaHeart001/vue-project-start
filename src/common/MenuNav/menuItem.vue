<template>
  <el-submenu
    v-if="list.isParent"
    v-show="list.isShowPage"
    :index="list.component"
    :key="list.component"
    @click="clickRouter(list)"
  >
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>{{list.name}}</span>
    </template>
    <template v-for="menu in list.children">
      <menuItem :toRouter="toRouter" :list="menu" :key="menu.id"></menuItem>
    </template>
  </el-submenu>
  <el-menu-item
    v-else
    v-show="list.isShowPage"
    :index="list.component"
    :key="list.component"
    @click="clickRouter(list)"
  >
    <i class="el-icon-menu"></i>
    <span slot="title">{{list.name}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    list: {
      type: Object,
      default: () => {}
    },
    toRouter: Function
  },
  methods: {
    clickRouter(route) {
      this.toRouter(route);
      //console.log(route)
    }
  }
};
</script>

<style>
.menu-item-wrap-componen {
  display: inline-block;
  text-align: left;
}
</style>