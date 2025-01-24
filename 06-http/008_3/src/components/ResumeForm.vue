<template>
  <form class="card card-w30" @submit.prevent="addBlock">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="blockType">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="blockValue"></textarea>
    </div>

    <button class="btn primary" type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      blockType: 'title',
      blockValue: '',
    }
  },
  emits: ['block-added'],
  methods: {
    addBlock() {
      this.$emit('block-added', { id: crypto.randomUUID(), type: this.blockType, value: this.blockValue })
      this.blockType = 'title'
      this.blockValue = ''
    },
  },
}
</script>

<style></style>
