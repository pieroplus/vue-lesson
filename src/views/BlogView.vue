<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const nextId = computed(() => Number(route.params.id) + 1)
watch(
  () => route.params.id,
  (newVal, oldVal) => {
    console.log('watch', newVal, oldVal)
  },
)
onMounted((): void => {
  console.log('onMounted')
})
</script>
<template>
  <h2>Blog(id: {{ $route.params.id }})</h2>
  <RouterLink :to="{ name: 'blog', params: { id: nextId } }">Next Blog</RouterLink>
</template>
