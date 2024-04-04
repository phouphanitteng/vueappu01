<template lang="">
  <div>
    <button v-on:click="greet">Greet</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Vue.js",
    };
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName+" Are you sure?");
      }
    },
  },
};
</script>
<style lang=""></style>
