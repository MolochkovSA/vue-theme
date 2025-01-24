<template>
  <div class="card card-w70">
    <ul v-if="blocks.length > 0">
      <component v-for="block in blocks" :key="block.id" :is="'resume-' + block.type" :value="block.value" />
    </ul>

    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeTitle from './Parts/ResumeTitle.vue'
import ResumeAvatar from './Parts/ResumeAvatar.vue'
import ResumeSubtitle from './Parts/ResumeSubtitle.vue'
import ResumeText from './Parts/ResumeText.vue'

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
  components: {
    ResumeTitle,
    ResumeAvatar,
    ResumeSubtitle,
    ResumeText,
  },
}
</script>

<style></style>
