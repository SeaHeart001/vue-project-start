<template>
  <div class="module-wrap">
    <div>
      <el-button @click="exit">exit</el-button>
    </div>
    <div>
      <MenuNav :list="menuList" />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuNav from "../common/MenuNav/menuNav";
export default {
  components: {
    MenuNav
  },
  computed: {
    menuList() {
      return this.$storage.get("menuList");
    }
  },
  methods: {
    exit() {
      this.$confirm("确认退出？", "提示", {
        type: "warning"
      })
        .then(_ => {
          //debugger
          //this.$storage.remove("menuList");
          this.$storage.remove("authorization");
          // this.$router.push({
          //   path: '/'
          // });
          // window.location.reload();
          window.location.href = "./";
        })
        .catch(e => {});
    }
  }
};
</script>

<style lang="stylus" scope>
.module-wrap {
  height: 100%;
}
</style>