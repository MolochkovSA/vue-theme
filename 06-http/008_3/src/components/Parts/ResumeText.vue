<template>
  <p>{{ value }}</p>
</template>

<script>
export default {
  name: 'ResumeText',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
