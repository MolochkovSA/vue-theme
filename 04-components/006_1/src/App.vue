<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{ index, iter }">
        <span style="color: orange">
          <strong>{{ index + 1 }}</strong> item: {{ iter }}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Lorem ipsum dolor sit amet.</p>
      <template #title><h3>This is a title</h3> </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock.vue'
import AppList from './AppList.vue'

export default {
  components: { AppBlock, AppList },
}
</script>

<style scoped></style>
