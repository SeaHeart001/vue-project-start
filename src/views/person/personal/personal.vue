<template>
  <div>
    <div>personal</div>
    <el-button @click="toErrorRouteByName">toErrorRouteByName1</el-button>
    <el-button @click="toErrorRouteByPath">toErrorRouteByPath2</el-button>
    <div class="span-input-wrap">
        <EditModule v-model="newVv1"></EditModule>
        aaa
        <EditModule v-model="newVv2"></EditModule>
        bbb
        <hr>
        {{newVv1}}--{{newVv2}}
    </div>
  </div>
</template>

<script>
import EditModule from '@/common/EditSpan/EditModule';
export default {
  name: "personal",
  components: { EditModule },
  data() {
    return {
      newVv1: "123",
      newVv2: "456"
    };
  },
  mounted() {
    
  },
  methods: {
    toErrorRouteByName(){
      this.$router.push({
        name: 'dasdad'
      })
    },

    toErrorRouteByPath(){
      this.$router.push({
        path: './adasdad'
      })
    }
  }
};
</script>

<style>
.span-input-wrap{
  text-align: left;
}
</style>