eg:
<template>
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
</template>


export default {
  name: "HelloWorld",
  components: {
    EditSpan
  },
  data() {
    return {
      editableValue1: "",
      defaultValue1: "111222",

      editableValue2: "",
      defaultValue2: "333444"
    };
  },
  
  methods: {
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