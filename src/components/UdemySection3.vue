<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'

const countWatch1 = ref(0)
const countWatch2 = ref(0)
const countWatch3 = ref(0)
const countWatch4 = ref<{ id: number; name: string }>({
  id: 0,
  name: 'Taro',
})
const countWatch5 = ref<{ id: number; name: string }>({
  id: 0,
  name: 'Jiro',
})
const vueId = ref<string>('vue-link')
const vueURL = ref<string>('https://vuejs.org')
const count = ref<number>(0)
const isRed = ref<boolean>(true)
const isBgBlue = ref<boolean>(true)
const className = ref('red')
const countUp = (event: MouseEvent, num: number): void => {
  console.log(event.clientX)
  count.value += num
}
const userInput = defineModel<number | null>({ default: null })
userInput.value = 0
const eventName = 'keyup'
const inputFunc = (): void => {
  console.log(userInput.value)
}
const score = ref<number>(0)
const evaluation = computed((): string => {
  return score.value > 3 ? 'Good' : 'Bad'
})
console.log(evaluation.value)

watchEffect(() => {
  console.log('watchEffect')
  console.log(countWatch1.value, countWatch2.value, countWatch3.value)
})
watch(countWatch1, (newVal, oldVal) => {
  console.log('watch')
  console.log(countWatch1.value, countWatch2.value, countWatch3.value)
  console.log(`newVal:${newVal} oldVal:${oldVal}`)
})
watch([() => countWatch4.value.id, () => countWatch5.value.id], (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
// watch(countWatch5, (newVal, oldVal) => {
//   console.log('countWatch5')
//   console.log(newVal, oldVal)
// })
const toggleClass = (): void => {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
  className.value = className.value == 'red' ? 'bg-blue' : 'red'
}
</script>
<template>
  <a v-bind:href="vueURL" :id="vueId">Vue.js</a><br />
  <a v-bind="{ id: vueId, href: vueURL }">Vue.js</a><br />
  <a :id="undefined" :href="undefined">Vue.js</a>
  <button :disabled="true">button</button><br />
  {{ count }}<br />
  <button @click="count = $event.clientX">クリック1</button><br />
  <button @click="countUp($event, 5)">クリック2</button><br />
  <div @click="countUp($event, 5)">
    <button @click.stop="countUp($event, 2)">button</button>
    <a href="https://vuejs.org" @click.prevent.stop>Vue</a>
  </div>
  <br />
  <input
    v-model="userInput"
    type="text"
    @[eventName].space.delete="count++"
    v-on:input="inputFunc"
  /><br />
  {{ userInput }}
  <button @click="userInput = (userInput ?? 0) - 1">button</button>
  <p>{{ score }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <button @click="score++">クリック</button>
  <p>countWatch1:{{ countWatch1 }}</p>
  <p>countWatch2:{{ countWatch2 }}</p>
  <p>countWatch3:{{ countWatch3 }}</p>
  <p>countWatch4ID:{{ countWatch4.id }}</p>
  <p>countWatch5ID:{{ countWatch5.id }}</p>
  <button @click="countWatch1 += 1">クリック1</button>
  <button @click="countWatch2 += 1">クリック2</button>
  <button @click="countWatch3 += 1">クリック3</button>
  <button @click="countWatch4.id += 1">クリック4</button>
  <button @click="countWatch5.id += 1">クリック5</button>
  <div :class="{ red: isRed, 'bg-blue': isBgBlue }">Hello</div>
  <button @click="toggleClass">toggle</button>
  <div class="border" :class="[className]">Hello</div>
  <div :style="{ color: 'red', backgroundColor: 'blue' }">Hello</div>
</template>
<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red;
}
</style>
