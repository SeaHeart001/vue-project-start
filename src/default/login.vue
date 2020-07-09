<template>
  <div class="login-wrap">
    <img src="../assets/logo.png" />
    <div class="user-login-entry">
      <h1>First vue start</h1>
      <el-input></el-input>
      <el-input></el-input>
      <el-button @click="toLogin">login</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import router from "@/router";
//import httpServer from '@/http/http';
import EditSpan from "../common/EditSpan/EditSpan";
export default {
  name: "HelloWorld",
  components: {
    EditSpan
  },
  data() {
    return {
      msg: "Vue.js App"
    };
  },
  props: {
    testList: {
      type: Array,
      default: () => []
    }
  },
  mounted() {},
  methods: {
    toLogin() {
      //this.$storage.set("menuList", res.data);
      this.getMenuServer({ a: 1 });
    },

    getMenuServer(data) {
      this.$httpServer({
        method: "post",
        url: "/api/menu",
        data: this.$qs(data)
      }).then(res => {
        console.log(res.data, "menuList");
        this.$storage.set("menuList", res.data);
        this.$creatRouter(res.data, () => {
          console.log(this);
          //replace不生成历史记录
          this.$router.replace({
            name: res.data[0].name
          });
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.login-wrap
  .user-login-entry
    margin 0 auto
    width 300px
    .el-input
      margin 10px 0
</style>
