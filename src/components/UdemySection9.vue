<script setup lang="ts">
import { shallowRef } from 'vue';
import CompA from './DynamicComponents/CompA.vue';
import CompB from './DynamicComponents/CompB.vue';
import CompC from './DynamicComponents/CompC.vue';


const currentComp = shallowRef(CompA)
</script>
<template>
	<button @click="currentComp = CompA">A</button>
	<button @click="currentComp = CompB">B</button>
	<button @click="currentComp = CompC">C</button>
	<h2>DynamicComponents</h2>
	<KeepAlive>
		<component :is="currentComp" />
	</KeepAlive>
	<KeepAlive>
		<CompB v-if="currentComp === CompB" />
	</KeepAlive>
</template>
