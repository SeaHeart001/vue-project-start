<template>
<!-- horizontal / vertical -->
  <el-menu
    v-show="true"
    mode="horizontal"
    menu-trigger="hover"
    :default-active="$route.name"
    class="menu-nav-wrap"
    @open="handleOpen" 
    @close="handleClose">
    <template v-for="menu in menuList">
      <menuItem :toRouter="toRouter" :menuMap="menu" :key="menu.id"></menuItem>
    </template>
  </el-menu>
</template>

<script>
import menuItem from "./menuItem";
export default {
  name: "menuNav",
  data () {
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