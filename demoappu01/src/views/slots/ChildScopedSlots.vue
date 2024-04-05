<template>
  <div>
  
    <div>
      <slot :data="internalData"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      internalData: 'Data from child component'
    }
  }
}
</script>
