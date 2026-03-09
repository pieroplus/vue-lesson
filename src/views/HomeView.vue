<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(1)
</script>
<template>
  <h2>Home</h2>
  <h3>Blog</h3>
  <RouterLink to="/blog/32">New Relese1</RouterLink><br />
  <RouterLink :to="{ path: '/blog/33' }">New Relese2</RouterLink><br />
  <RouterLink :to="{ path: `/blog/${count}` }">New Relese3</RouterLink>
  <button @click="count++">+1</button><br />
  <RouterLink :to="{ name: 'blog', params: { id: 8 } }">New Relese4</RouterLink>
</template>
