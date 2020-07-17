<template>
  <div>
    personal
    <el-button @click="toErrorPath">toErrorPath</el-button>
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
    toErrorPath(){
      // this.$router.push({
      //   name: 'dasdad'
      // })
      // return
      this.$router.push({
        path: './adasdad'
      })
    }
  }
};
</script>

<style>
</style>