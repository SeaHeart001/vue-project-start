<template>
  <div>
    <div>personal</div>
    <el-button @click="toErrorRouteByName">toErrorRouteByName</el-button>
    <el-button @click="toErrorRouteByPath">toErrorRouteByPath</el-button>
    <div class="span-input-wrap">
        aaaaa
        <EditSpan
        :defaultValue="defaultValue1"
        @valueChange="editValue1"></EditSpan>  
        bbbbb
        <EditSpan
        :defaultValue="defaultValue2"
        @valueChange="editValue2"></EditSpan>
    </div>
  </div>
</template>

<script>
import EditSpan from '@/common/EditSpan/EditSpan';
export default {
  name: "personal",
  components: { EditSpan },
  data() {
    return {
      editableValue1: "",
      defaultValue1: "111222",

      editableValue2: "",
      defaultValue2: "333444"
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
    },

    editValue1(value){
      this.editableValue1 = value;
      console.log(value, 'editValueeditValue1111')
    },

    editValue2(value){
      this.editableValue2 = value;
      console.log(value, 'editValueeditValue2222')
    },
  }
};
</script>

<style>
</style>