<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
</script>
<template>
  <h5 class="blue">CountComponent</h5>
  <p class="red">count:{{ count }}</p>
  <button @click="count++">+1</button>
</template>
<style scoped>
.red {
  color: red;
}
</style>
