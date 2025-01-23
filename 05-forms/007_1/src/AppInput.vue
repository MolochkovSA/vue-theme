<template>
  <div class="form-control" :class="{ invalid: error }">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :placeholder="placeholder" :value="modelValue" @input="change" />
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: String,
    modelValue: String,
    label: String,
    placeholder: String,
    error: String,
  },
  emits: ['update:modelValue'],
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
  data: () => ({
    id: crypto.randomUUID(),
  }),
}
</script>

<style></style>
