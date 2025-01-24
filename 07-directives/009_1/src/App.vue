<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].blink.hover="myColor">Про директивы</h2>

      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input type="text" id="inp" v-focus />
      </div>

      <button class="btn" @click="myColor = 'blue'">Сделать синим!</button>
      <button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Переключить тип</button>
    </div>
  </div>
</template>

<script>
import { colorDirective } from './colorDirective'
import { focusDirective } from './focusDirective'

export default {
  name: 'App',
  data() {
    return {
      myColor: 'red',
      type: 'color',
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('myColor', this.myColor)

      this.myColor = 'green'
    }, 3000)
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
}
</script>
