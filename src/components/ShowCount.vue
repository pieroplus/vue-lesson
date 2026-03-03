<script setup lang="ts">
import { watch, watchEffect } from 'vue'

type Props = {
  totalScore: number
  bar?: string | number
}
const props = withDefaults(defineProps<Props>(), { bar: 'aaa' })
// const props = defineProps({
//   foo: {
//     type: Number,
//     required: true,
//     default: 100,
//   },
//   bar: {
//     type: [Number, String],
//     default: 'aaa',
//   },
// })
watchEffect(() => {
  console.log(props.totalScore)
})
watch(
  () => props.totalScore,
  () => {
    console.log('watch')
  },
)
</script>
<template>
  <p>count:{{ props.totalScore }}</p>
  <p>{{ props.bar }}</p>
</template>
