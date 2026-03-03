<script setup lang="ts">
import BaseCard from './BaseCard.vue';

</script>
<template>
	<h1>Slots</h1>
	<BaseCard >
		<template v-slot:header="{pageCount}">
			<p>{{ pageCount }}</p>
			<h2 v-if="pageCount === 1">Vue.js Course</h2>
			<h2 v-if="pageCount === 2">HTML Course</h2>
			<h2 v-if="pageCount === 3">CSS Course</h2>
			header
		</template>
		<template v-slot:main>
			<h2>Hello</h2>
			<p>How are you?</p>
		</template>
		<template v-slot:footer>
			footer
		</template>
	</BaseCard>
	<BaseCard />
</template>
