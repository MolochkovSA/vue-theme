<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title="Warning!"
      text="Lorem ipsum dolor sit amet"
      type="warning"
      closable
      @close="alert = false"
    />

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide' : 'Show' }} message</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppBlock from './components/AppBlock.vue'
import { alertMixin } from './alertMixin'

export default {
  mixins: [alertMixin],
  components: { AppAlert, AppBlock },
}
</script>
