<template>
    
    <span contenteditable class="editable-span" @input="editValue($event)"></span>
  
</template>

<script>
export default {
  name: "EditSpan",
  props: {
    defaultValue: {
      //初始有值传入, 使用contenteditable属性，
      //导致组件问题不能defaultValue和editableValue共用, 共用会导致光标异常问题
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editableValue: "",
    };
  },

  watch: {
    defaultValue: {
      immediate: true,
      handler(value) {
        if (value) {
          this.$nextTick((_) => {
            this.$el.innerText = value;
          });
          this.editableValue = value;
          //事件将值传出组件
          this.$emit("valueChange", value);
        }
      },
    },
  },

  methods: {
    editValue(e) {
      //console.log(e.target.innerText, 1111);
      //事件将值传出组件
      this.$emit("valueChange", e.target.innerText);
    },
  },
};
</script>

<style scoped>
.editable-span-wrap{
  position: relative;
}
.editable-span {
  /* display: inline-block; */
  /* text-decoration: underline; */
  padding: 0 10px;
  min-width: 100px;
  border-bottom: 1px solid #333;
  outline: none;
  word-break: break-all;
  white-space: pre-wrap;
  position: relative;
}
/* .editable-span::after{
  display: block;
  position: absolute;
  content: '111';
} */
</style>