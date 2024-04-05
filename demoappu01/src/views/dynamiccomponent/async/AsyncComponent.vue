<template>
    <div>
      <async-component />
    </div>
  </template>
  
  <script>
  import LoadingComponent from './LoadingComponent.vue';
  import ErrorComponent from './ErrorComponent.vue';
  
const AsyncComponent = () => ({
  component: import('./AsyncCom.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200, // milliseconds
  timeout: 3000, // milliseconds
});


export default {
  components: {
    // Register the async component
    'async-component': AsyncComponent
  }
}
  </script> 
  