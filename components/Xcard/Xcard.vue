<template>
  <div class="x-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>

<style scoped>
.x-card:hover {
  @apply shadow-2xl;
}
</style>
