<template>
  <div>
    <ul class="card" v-if="people.length !== 0">
      <li class="inline" v-for="person in people" :key="person.id">
        <h3>{{ person.firstName }}</h3>
        <button class="btn danger" @click="$emit('remove', person.id)">Remove</button>
      </li>
    </ul>

    <div class="card center" v-else>
      <h4>Людей пока нет</h4>
      <button class="btn" @click="$emit('load')">Загрузить список</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['load', 'remove'],
  props: ['people'],
}
</script>

<style scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
