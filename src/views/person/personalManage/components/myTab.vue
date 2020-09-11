<template>
    <div>
        <el-tabs v-bind="$attrs" v-on="$listeners">
            <el-tab-pane 
            v-for="(item, index) in tabList" 
            :key="index"
            :label="item.label" 
            :name="item.name"></el-tab-pane>
        </el-tabs>
        <div class="temp-wrap">
            <slot name="temp"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myTab',
    
    props: {
        tabList : {
            type: Array,
            default(){
                return []
            }
        }

    }

}
</script>

<style>

</style>