const App = {
  data: () => ({
    title: 'Some title',
    myHtml: '<h1>Vue 3 App</h1>',
    person: {
      firstName: 'John',
      lastName: 'Smith',
      age: 40,
    },
    items: [1, 2],
  }),

  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    log(item) {
      console.log(item)
    },
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0)
    },
  },
}

Vue.createApp(App).mount('#app')
