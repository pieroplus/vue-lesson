<script setup lang="ts">
import { useRefLimitedHisotry } from '@/composables/refLimitedHistory';
import { ref } from 'vue'

const count = ref<number>(0)
const userInput = ref<string | number>('');



const {history, undo} = useRefLimitedHisotry(count, 10)
const {history: history2, undo: undo2} = useRefLimitedHisotry(userInput, ref(5))


</script>
<template>
	<p>count: {{ count }}</p>
	<button @click="count += 1">+1</button>
	<p>history:{{ history }}</p>
	<button @click="undo">undo</button>
	<p>userInput: {{ userInput }}</p>
	<input type="text" v-model="userInput" />
	<p>history2:{{ history2 }}</p>
	<button @click="undo2">undo2</button>
</template>