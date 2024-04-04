<template>
  <div id="example">
    <h2>The Computed Properties</h2>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <h2>Computed catch vs method</h2>
    <p>Reversed message: "{{ reverseMessage() }}"</p>
  </div>
</template>
<script>
export default {
  name: "ComputedProperties",
  components: {},
  data() {
    return {
      data: [],
      message: "Hello",
    };
  },
  methods: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  mounted: {},
  computed: {
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
<style scoped>
#example{
  margin-left: 20px;
}
</style>
