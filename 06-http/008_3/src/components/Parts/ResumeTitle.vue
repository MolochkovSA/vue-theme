<template>
  <h1>{{ value }}</h1>
</template>

<script>
export default {
  name: 'ResumeTitle',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
