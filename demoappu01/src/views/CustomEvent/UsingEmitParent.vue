<template lang="">
    <div>
        <p>{{message}}</p>
        <UsingEmitParentChild v-model="parentValue" @button-click="handleBtnClick"/>
        <p>{{parentValue}}</p>
    </div>
</template>
<script>
import UsingEmitParentChild from './UsingEmitParentChild.vue';
export default {
    components: {UsingEmitParentChild},
    data(){
        return{
            message: "",
            parentValue:""
        }
    },
    methods:{
        handleBtnClick(message){
            this.message = message;
        }
    }
}
</script>
<style lang="">
    
</style>