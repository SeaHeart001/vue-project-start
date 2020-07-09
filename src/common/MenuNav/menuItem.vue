<template>
  <el-submenu
    v-if="menuMap.isParent"
    v-show="menuMap.isShowPage"
    :index="menuMap.component"
    :key="menuMap.component"
    @click="clickRouter(menuMap)"
  >
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>{{menuMap.name}}</span>
    </template>
    <template v-for="menu in menuMap.children">
      <menuItem :toRouter="toRouter" :menuMap="menu" :key="menu.id" v-if="menu"></menuItem>
    </template>
  </el-submenu>
  <el-menu-item
    v-else
    v-show="menuMap.isShowPage"
    :index="menuMap.component"
    :key="menuMap.component"
    @click="clickRouter(menuMap)"
  >
    <i class="el-icon-menu"></i>
    <span slot="title">{{menuMap.name}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    menuMap: {
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