<template>
  <div class="container">
    <app-alert v-if="alert" title="Warning!" text="Lorem ipsum dolor sit amet" @close="alert = false" />

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide' : 'Show' }} message</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
import { alertMixin } from '../alertMixin'

export default {
  mixins: [alertMixin],
  components: { AppAlert },
}
</script>

<style></style>
