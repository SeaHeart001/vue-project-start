<template>
  
    <!-- <div>personnalManage</div> -->
    <myTab v-model="activeName" @tab-click="handleClick" :tabList="tabList">
      <components :is="activeName" :test="test" slot="temp"></components>
    </myTab>
  
</template>

<script>
import myTab from "./components/myTab";
// import temp1 from "./components/temp1";
// import temp2 from "./components/temp2";

// const myTab = () => import('./components/myTab');
// const temp1 = () => import('./components/temp1');
// const temp2 = () => import('./components/temp2');
import temp1 from './components/temp1';
import temp2 from './components/temp2';

export default {
  name: "personnalManage",

  components: {
    myTab,
    temp1,
    temp2,
  },

  data() {
    return {
      test: "xxx",
      activeName: "temp1",
      tabList: [{ name: "temp1", label: 'xxxT1' }, { name: "temp2", label: 'xxxT2'}],
    };
  },

  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  },
};
</script>

<style>
</style>