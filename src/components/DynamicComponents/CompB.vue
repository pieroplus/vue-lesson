<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const count = ref<number>(0)

onMounted(() => {
	console.log('CompB onMounted');
})

onUnmounted(() => {
	console.log('CompB onUnmounted');
})
</script>
<template>
	<h2>CompB</h2>
	<p>{{ count }}</p>
	<button @click="count++">+1</button>
</template>