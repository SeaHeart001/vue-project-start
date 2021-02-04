<template>
  <div class="module-wrap">
    <div>
      <el-button @click="exit">exit</el-button>
      <el-button v-for="(item, index) in btnMsgType" :key="index" @click="test(item)">{{item}}</el-button>
    </div>
    <div>
      <MenuNav :list="menuList" />
    </div>
    <div v-watermark>
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
  data(){
    return {
      btnMsgType: ['info', 'success', 'error', 'warning']
    }
  },
  methods: {
    test(type){
      console.log(this.$store, this.$store.state.app.appMsg, 111);
      this.$store.commit('app/CONSOLELOG')//?
      this.$store.dispatch('app/actionsConsoleLog')//?
      return
      //alert('1111')
      this.$confirm[type]({
        message: type
      }).then(()=>{
        alert(type)
      }).catch(()=>{
        alert('qxl')
      })

    },

    exit() {

      this.$confirm.warning({
        title: "提示",
        message : "确认退出?",
      }).then(_ => {
        this.$storage.remove("authorization");
        window.location.href = "./";
      }).catch(e => {});

      // this.$confirm("确认退出？", "提示", {
      //   type: "warning"
      // })
      //   .then(_ => {
      //     //debugger
      //     //this.$storage.remove("menuList");
          
      //     // this.$router.push({
      //     //   path: '/'
      //     // });
      //     // window.location.reload();
      //     window.location.href = "./";
      //   })
      //   .catch(e => {});
    }
  }
};
</script>

<style lang="stylus" scope>
.module-wrap {

  
  height: 100%;
}
</style>