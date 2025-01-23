<template>
  <div class="card">
    <div v-if="$slots.title">
      <slot name="title"></slot>
    </div>

    <slot name="default">
      <p>default content</p>
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
