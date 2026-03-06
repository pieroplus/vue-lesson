<script setup lang="ts">
interface Emit {
 (e: 'hello', val: string): void
}
const model = defineModel<string | number>()
const emit = defineEmits<Emit>()
</script>
<template>
	<h2>CustomInput</h2>
	<input type="text" v-model="model"><br />
	<button @click="model='hi'">hi</button>
	<p>子コンポーネントmodel:{{ model }}</p>
	<h2>EMIT</h2>
	<button @click="emit('hello', 'test')">EMIT</button>
</template>