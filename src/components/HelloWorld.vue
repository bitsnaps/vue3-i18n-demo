<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <p>
    Check out
    <a href="https://vue-i18n.intlify.dev/" target="_blank"
      >I18n-vue</a
    >, the official Vue plugin for I18n
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
