<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="body">
      <ComponentA />
      <div class="card">
        <ComponentD />
        <ComponentC />
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import ComponentA from "@/components/pageA/ComponentA.vue";
import ComponentC from "@/components/pageB/ComponentC.vue";
import ComponentD from "@/components/pageB/ComponentD.vue";
import Header from "@/components/pageA/Header.vue";
import Footer from "@/components/pageA/Footer.vue";
export default {
  name: "PageA",
  components: {
    ComponentA,
    ComponentC,
    ComponentD,
    Header,
    Footer,
  },
};
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
.body {
  display: flex;
  justify-content: space-evenly;
}
.card {
    margin-left: 10px;
}
</style>
