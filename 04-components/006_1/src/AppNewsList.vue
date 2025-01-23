<template>
  <div>
    <hr />
    <ul>
      <li v-for="item in news" :key="item.id" :class="{ 'was-read': item.wasRead }">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['news'],
}
</script>

<style scoped>
.was-read {
  text-decoration: line-through;
}
</style>
