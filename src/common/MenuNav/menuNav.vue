<template>
<!-- horizontal / vertical -->
  <el-menu
    mode="vertical"
    :default-active="$route.name"
    class="el-menu-vertical-demo menu-nav-wrap"
    @open="handleOpen" 
    @close="handleClose">
    <menuItem :toRouter="toRouter" :list="menuList"></menuItem>
  </el-menu>
</template>

<script>
import menuItem from "./menuItem";
export default {
  name: "menuNav",
  data(){
    return {
      //activeRouteName: ''
    }
  },
  mounted(){
    //this.activeRouteName = this.$route.name
  },
  components: {
    menuItem
  },
  computed: {
    menuList() {
      return this.$storage.get("menuList");
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath, 'OPEN');
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, 'CLOSE');
    },
    toRouter(route){
      console.log(route);
      this.$router.push({
        name: route.component
      });
      //this.activeRouteName = this.$route.name
    }
  }
};
</script>

<style>
.menu-nav-wrap{
    text-align: left;
}
</style>