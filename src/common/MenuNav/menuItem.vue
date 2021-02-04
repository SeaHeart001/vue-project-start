<template>
  <div class="deal-menu-maximum">
    <el-submenu
      :popper-append-to-body="true"
      v-if="menuMap.isParent"
      v-show="menuMap.isShowPage"
      :index="menuMap.component"
      :key="menuMap.component"
      @click="clickRouter(menuMap)"
    >
    <!-- element menu组件禁止了包节点菜单点击事件并重写了方法，若需要点击包节点菜单跳到第一个子菜单，@click.native -->
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>{{menuMap.name}}</span>
      </template>
      <template v-for="menu in menuMap.children">
        <menuItem :toRouter="toRouter" :menuMap="menu" :key="menu.id" v-if="menu"></menuItem>
      </template>
    </el-submenu>
    <el-menu-item
      :popper-append-to-body="true"
      v-else
      v-show="menuMap.isShowPage"
      :index="menuMap.component"
      :key="menuMap.component"
      @click="clickRouter(menuMap)"
    >
      <i class="el-icon-menu"></i>
      <span slot="title">{{menuMap.name}}</span>
    </el-menu-item>
  </div>
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
/* 解决horizontal时组件报错Maximum call stack size exceeded */
.menu-nav-wrap.el-menu--horizontal>.deal-menu-maximum{
  display: inline-block;
}
.menu-nav-wrap.el-menu--horizontal>.deal-menu-maximum>.el-submenu>.el-submenu__title>.el-submenu__icon-arrow{
  right: 0
}
</style>