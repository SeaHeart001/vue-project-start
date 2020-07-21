<template>
  <div>
    <div>personal</div>
    <el-button @click="toErrorRouteByName">toErrorRouteByName</el-button>
    <el-button @click="toErrorRouteByPath">toErrorRouteByPath</el-button>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      
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
</style>