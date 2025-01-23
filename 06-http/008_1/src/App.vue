<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>

    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list v-else :people="people" @load="loadPeople" @remove="removePerson"></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './AppPeopleList'
import AppAlert from './AppAlert'
import AppLoader from './AppLoader'

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false,
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      // https://vue-with-http-94fbc-default-rtdb.firebaseio.com/people.json

      const responce = await fetch('https://vue-with-http-94fbc-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name,
        }),
      })

      const firebaseData = await responce.json()

      this.people.push({
        firstName: this.name,
        id: firebaseData.name,
      })

      this.alert = {
        type: 'primary',
        title: 'Успешно!',
        text: `Пользователь с именем "${this.name}" был создан`,
      }

      this.name = ''
    },
    async loadPeople() {
      try {
        this.loading = true
        const res = await fetch('https://vue-with-http-94fbc-default-rtdb.firebaseio.com/people.json')
        const data = await new Promise((resolve) => {
          setTimeout(() => resolve(res.json()), 1500)
        })

        if (!data) {
          throw new Error('Список людей пуст')
        }

        this.people = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: error.message,
        }
      } finally {
        this.loading = false
      }
    },
    async removePerson(id) {
      try {
        await fetch(`https://vue-with-http-94fbc-default-rtdb.firebaseio.com/people/${id}.json`, {
          method: 'DELETE',
        })
        const person = this.people.find((person) => person.id === id)
        this.people = this.people.filter((person) => person.id !== id)

        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Пользователь с именем "${person.firstName}" был удален`,
        }
      } catch (error) {}
    },
  },
  components: { AppPeopleList, AppAlert, AppLoader },
}
</script>

<style></style>
