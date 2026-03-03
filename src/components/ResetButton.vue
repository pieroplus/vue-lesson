<script setup lang="ts">
const emit = defineEmits<{ (e: 'reset', value: number): void }>()
</script>
<template>
  <button @click="emit('reset', 0)">Reset</button>
</template>
