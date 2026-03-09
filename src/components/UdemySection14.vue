<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
import CounterComp from './CounterComp.vue';
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>Pinia</h1>
	<button @click="counterStore.count++">+1</button>
	<p>{{ counterStore.count }}</p>
	<button @click="counterStore.increment">increment</button>
	<CounterComp />
</template>
