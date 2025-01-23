<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <AppButton @action="open">{{ isNewsOpen ? 'Close' : 'Open' }} </AppButton>
    <AppButton color="danger" @action="$emit('unread-news', id)" v-if="wasRead"> Unread </AppButton>
    <div class="content" v-if="isNewsOpen">
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores voluptas exercitationem libero qui
        vero culpa consequatur placeat quas sint.
      </p>
      <AppButton color="primary" @action="read" v-if="!wasRead"> Read </AppButton>
      <app-news-list />
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList.vue'

export default {
  //   props: ['title'],
  props: {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      },
    },
    wasRead: { type: Boolean, required: false, default: false },
  },
  // emits: ['open-news'],
  emits: {
    'open-news'(id) {
      if (id) {
        return true
      }

      return false
    },
    'read-news'(id) {
      if (id) {
        return true
      }

      return false
    },
    'unread-news'(id) {
      if (id) {
        return true
      }

      return false
    },
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      this.$emit('open-news', this.id)
    },
    read() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
  },
  components: { AppButton, AppNewsList },
}
</script>

<style></style>
