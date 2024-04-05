<template >
    <div>
        <h1>Using props</h1>
        <h3>This message below is from Parent Component</h3>
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    props: ['message']
}
</script>
<style>
    
</style>