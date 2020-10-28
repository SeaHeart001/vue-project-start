<template>
  
  <span class="editable-span"
         v-html="innerText"
         :contenteditable="canEdit"
         @focus="isLocked = true"
         @blur="isLocked = false"
         @input="changeText">
    </span>
</template>
 
<script>

 export default{
        name: 'editDiv',
        props: {
            value: {
                type: String,
                default: ''
            },
            canEdit: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                innerText: this.value,
                isLocked: false
            }
        },
        watch: {
            'value'(){
                if (!this.isLocked || !this.innerText) {
                    this.innerText = this.value;
                }
            }
        },
        methods: {
            changeText(){
                this.$emit('input', this.$el.innerHTML);
            }
        }
    }
</script>
<style lang="stylus">
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
</style>