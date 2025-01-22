const App = {
  data() {
    return {
      title: 'Note list',
      placeholderStr: 'Note name',
      inputValue: '',
      notes: ['Note 1', 'Note 2'],
    }
  },
  methods: {
    addNote() {
      if (this.inputValue === '') return

      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    removeNote(note) {
      this.notes.splice(this.notes.indexOf(note), 1)
    },
    toUpperCase(str) {
      return str.toUpperCase()
    },
    doubleCount() {
      return this.notes.length * 2
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue(value) {
      console.log(value)
    },
  },
}

Vue.createApp(App).mount('#app')
