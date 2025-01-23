<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Dynsmic and async components</h2>

      <app-button :color="active === 'One' ? 'primary' : ''" @action="active = 'One'"> One </app-button>
      <app-button :color="active === 'Two' ? 'primary' : ''" @action="active = 'Two'"> Two </app-button>
    </div>

    <component :is="componentName"></component>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppTextOne from './AppTextOne.vue'
import AppTextTwo from './AppTextTwo.vue'

export default {
  data: () => ({
    active: 'Two',
  }),
  components: { AppButton, AppTextOne, AppTextTwo },
  computed: {
    componentName() {
      return `AppText${this.active}`
    },
  },
}
</script>

<style scoped></style>
