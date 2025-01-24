<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'warning', 'danger'].includes(value)
      },
    },
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
}
</script>

<style></style>
