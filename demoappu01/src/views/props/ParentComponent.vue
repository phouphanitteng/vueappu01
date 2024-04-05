<template >
    <div>
        <ChildComponent :message="message"/>
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
            message: "Hello from Parent"
        }
    }
}
</script>
<style lang="">
    
</style>