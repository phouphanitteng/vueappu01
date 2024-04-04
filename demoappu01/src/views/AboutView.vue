<template>
  <div class="about">
    <ComputedProperties/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>

<script>
import ComputedProperties from "./ComputedProperties.vue";
export default {
  components: {
    ComputedProperties,
  },
};
</script>
