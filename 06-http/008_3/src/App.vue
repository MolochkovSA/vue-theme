<template>
  <div>
    <div class="container column">
      <resume-form @block-added="blocks.push($event)" />
      <resume-card :blocks="blocks" />
    </div>

    <div class="container">
      <p>
        <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
      </p>

      <app-comments v-if="comments.length" :comments="comments" />

      <div class="loader" v-if="loading"></div>
    </div>
  </div>
</template>

<script>
import ResumeCard from './components/ResumeCard.vue'
import ResumeForm from './components/ResumeForm.vue'
import AppComments from './components/AppComments.vue'

export default {
  data() {
    return {
      blocks: [],
      comments: [],
      loading: false,
    }
  },
  methods: {
    async loadComments() {
      try {
        this.loading = true
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
        this.comments = await res.json()
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
  components: {
    ResumeCard,
    ResumeForm,
    AppComments,
  },
}
</script>

<style></style>
