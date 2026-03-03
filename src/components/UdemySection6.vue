<script setup lang="ts">
import ShowCount from '@/components/ShowCount.vue'
import { ref } from 'vue'
import ResetButton from '@/components/ResetButton.vue'
const count = ref<number>(0)
const resetCount = (val: number): void => {
  count.value = val
}
</script>
<template>
  <ShowCount :totalScore="count" bar="bar" />
  <ShowCount v-bind="{ totalScore: count, bar: 'bar' }" />
  <ShowCount :totalScore="count" />
  <button @click="count++">+1</button>
  <ResetButton @reset="resetCount" />
</template>
