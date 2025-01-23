<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Dynsmic and async components</h2>
      <async-component></async-component>
      <app-button :color="oneColor" @action="active = 'One'"> One </app-button>
      <app-button :color="twoColor" @action="active = 'Two'"> Two </app-button>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppAsyncComponent from './AppAsyncComponent.vue'
import AppButton from './AppButton.vue'
import AppTextOne from './AppTextOne.vue'
import AppTextTwo from './AppTextTwo.vue'

export default {
  data: () => ({
    active: 'Two',
  }),
  components: { AppButton, AppTextOne, AppTextTwo, AppAsyncComponent },
  computed: {
    // componentName() {
    //   return `AppText${this.active}`
    // },
    componentName: {
      get() {
        return `AppText${this.active}`
      },
      set(value) {
        console.log(value)
      },
    },
    oneColor() {
      return this.active === 'One' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'Two' ? 'primary' : ''
    },
  },
}
</script>

<style scoped></style>
