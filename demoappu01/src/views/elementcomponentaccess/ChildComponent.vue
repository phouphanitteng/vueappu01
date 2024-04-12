<template lang="">
    <div>
        <h1>Using $parent </h1>
        <p>{{$parent.parentData}}</p>
        <button @click="updatedParentData">Update parent data</button>
        <br/>
        <h1>Using $root </h1>
        <button v-on:click="updatedRootData">Update Global Data from Child</button>
    </div>
</template>
<script>
export default {
    methods:{
        updatedParentData(){
            this.$parent.parentData = "Updated data from child"
        },
        updatedRootData(){
            this.$root.globleMethod()
        },
    }
}
</script>
<style lang="">
    
</style>