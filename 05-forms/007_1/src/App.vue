<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <AppInput type="text" label="Как тебя зовут?" placeholder="Введи имя" :error="errors.name" v-model="name" />

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" max="70" v-model.number="age" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="trip" value="yes" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="trip" value="no" /> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vuex" /> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vue cli" /> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vue router" /> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './AppInput'

export default {
  name: 'App',
  data() {
    return {
      name: '',
      age: 30,
      city: 'nsk',
      trip: null,
      skills: [],
      errors: {
        name: null,
        age: null,
        city: null,
        trip: null,
        skills: null,
      },
    }
  },
  methods: {
    formIsValid() {
      if (this.name === '') {
        this.errors.name = 'Name cannot be empty'

        return false
      } else {
        this.errors.name = null
      }

      return true
    },
    submitHandler() {
      if (this.formIsValid()) {
        console.group('Form Data')
        console.log(this.name)
        console.log(this.age)
        console.log(this.city)
        console.log(this.trip)
        console.log(this.skills)
        console.groupEnd()
      }
    },
  },
  components: { AppInput },
}
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input {
  border-color: red;
}
</style>
