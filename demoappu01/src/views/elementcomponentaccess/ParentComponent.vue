<template>
    <div>
        <h1>Root App</h1>
        <p>Global Data: {{globalData}}</p>
        <button @click="updateGlobalData"> Update Global Data</button>
        <ChildComponent/>
    </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
    components:{
        ChildComponent
    },
    data(){
        return {
            parentData: "Data From Parent",
            globalData: "Initail Globle Data",
            
        }
    },
    methods:{
        updateGlobalData(){
            this.globalData = "Update Global Data"
        }
    }
}
</script>
<style lang="">
    
</style>