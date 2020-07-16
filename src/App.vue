<template>
  <div id="app-wrap" class="test-class-1">
    <router-view/>
  </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('app');
export default {
  name: 'App',
  computed: {
    ...mapState(['appMsg']),
    ...mapGetters(['computedGetterMsg']),
  },
  methods: {
    ...mapMutations(['CONSOLELOG']),
    ...mapActions(['actionsConsoleLog'])
  },
  mounted(){
    //测试vuex
    console.log(
      this.appMsg, 
      this.computedGetterMsg,
    'vuexxx')
    this.actionsConsoleLog({a:123})



    //测试$http
    var formData = new FormData();
    var file = new File([], 'file');
    formData.append('a', 1);
    formData.append('file', file);
    //this.$qs({a:1, b:2});
    //return
    this.$httpServer({
      method: 'post',
      url: '/api/test',
      configData: true,
      data: formData,
      loading: true,
      loadingConfig: {
        lock: true,
        text: 'Loading....',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }
      //responseType: 'blob'
    }).then(data => {
      //console.log(data, 'httpServer')
    })
  }
}
</script>

<style lang="stylus">
// 此处reset全局样式, 不要用scoped
@import '../static/reset.css';

#app-wrap 
  height 100%
  text-align center
  color $theme-text-color
  // _theme-border(1px, #333)

</style>
