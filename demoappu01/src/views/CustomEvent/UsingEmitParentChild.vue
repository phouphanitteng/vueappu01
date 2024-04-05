<template lang="">
    <div>
        <button v-on:click="notifyParent">Click me!</button> <br/>
        <input v-model="value" @input="$emit('input', $event.target.value)" 
        placeholder="Emit with model"/>
    </div>
</template>
<script>
export default {
    props: {
        value: String
    },
    methods:{
        notifyParent(){
            this.$emit("button-click", "Button clicked in child component by using $Emit")
        }
    }
}
</script>
<style lang="">
    
</style>