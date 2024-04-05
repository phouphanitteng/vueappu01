<template lang="">
    <div class="container">
        <div class="header">
            <Header/>
        </div>
        <div class="body">
            <ComponentA/>
            <ComponentB/>
        </div>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>
<script>
import ComponentA from "@/components/pageA/ComponentA.vue"
import ComponentB from "@/components/pageA/ComponentB.vue"
import Header from "@/components/pageA/Header.vue"
import Footer from "@/components/pageA/Footer.vue"
export default {
    name: "PageA",
    components:{
        ComponentA,ComponentB,Header,Footer,
    }
}
</script>
<style scoped>
    .container {
     border-style: solid;
     border-color: rgb(41, 186, 41);
     width: 600px;
     height: 700px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
    }
    .body{
        display: flex;
        justify-content: space-evenly;
    }
</style>