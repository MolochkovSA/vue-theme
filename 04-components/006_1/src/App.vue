<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Actual news {{ now }}</h2>
      <span
        >Open: <strong>{{ openRate }}</strong> | Read: <strong>{{ readRate.size }}</strong></span
      >
    </div>

    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :isOpen="item.isOpen"
      :wasRead="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unread-news="unreadNews"
    />
  </div>
</template>

<script>
import AppNews from './AppNews.vue'

export default {
  name: 'App',
  components: { AppNews },
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        { id: 1, title: 'News 1', isOpen: false, wasRead: false },
        { id: 2, title: 'News 2', isOpen: false, wasRead: false },
        { id: 3, title: 'News 3', isOpen: false, wasRead: false },
      ],
      openRate: 0,
      readRate: new Set(),
    }
  },
  methods: {
    openNews(id) {
      const index = this.news.findIndex((item) => item.id === id)

      this.news[index].isOpen = !this.news[index].isOpen
      this.openRate = this.news.filter((item) => item.isOpen).length
    },
    readNews(id) {
      const index = this.news.findIndex((item) => item.id === id)

      this.news[index].isOpen = false
      this.readRate.add(id)
      this.news[index].wasRead = true
      this.openRate = this.news.filter((item) => item.isOpen).length
    },
    unreadNews(id) {
      const news = this.news.find((item) => item.id === id)

      news.wasRead = false
      this.readRate.delete(id)
    },
  },
  provide() {
    return {
      news: this.news,
    }
  },
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
