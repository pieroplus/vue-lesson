<script setup lang="ts">
const {id} = defineProps<{id: string}>();
console.log(id);
</script>
<template>
	<h2>Profile(@{{ id }})</h2>
	<RouterView />
</template>