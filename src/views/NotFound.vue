<script setup lang="ts">
const {pathMatch} = defineProps<{pathMatch: string[]}>()
</script>
<template>
  <h2>Not Found</h2>
  <p>{{ $route.params.pathMatch }}</p>
  <p>{{ pathMatch }}</p>
</template>
