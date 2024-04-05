<template>
  <main>
    <h1>Named slots</h1>
    <named-slots-component>
      <template v-slot:header>
        <h3>This is a custom header</h3>
      </template>
      <p>Main content goes here...</p>
      <template v-slot:footer>
        <p>This is a custom footer</p>
      </template>
    </named-slots-component>

    <h1>Scoped slots</h1>
    <template>
      <scoped-slots-component>
        <template v-slot="slotProps">
          <p>{{ slotProps.data }}</p>
        </template>
      </scoped-slots-component>
    </template>
  </main>
</template>

<script>
import ChildSlots from "./ChildSlots.vue";
import ChildScopedSlots from "./ChildScopedSlots.vue";
export default {
  components: {
    "named-slots-component": ChildSlots,
    "scoped-slots-component": ChildScopedSlots,
  },
};
</script>
