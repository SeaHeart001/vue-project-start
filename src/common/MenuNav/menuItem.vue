<template>
  <div class="menu-item-wrap-component">
    <template v-for="item in list">
      <el-submenu 
      v-show="item.isShowPage"
      :index="item.component" 
      v-if="item.isParent" 
      :key="item.component" 
      @click="clickRouter(item)">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <menuItem :toRouter="toRouter" :list="item.children"></menuItem>
      </el-submenu>
      <el-menu-item 
      v-show="item.isShowPage"
      :index="item.component" 
      v-else :key="item.component" 
      @click="clickRouter(item)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>

export default {
  name: "menuItem",
  props: {
      list: {
          type: Array,
          default: () => []
      },
      toRouter: Function
  },
  methods: {
    clickRouter(route){
      this.toRouter(route);
      //console.log(route)
    }
  }
};
</script>

<style>
.menu-item-wrap-componen{
  display: inline-block;
  text-align: left;
}
</style>