<template>
  <h2>{{ value }}</h2>
</template>

<script>
export default {
  name: 'ResumeSubtitle',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
