<script setup lang="ts">
import { ref } from 'vue'
type Type = {
  id: number
  name: string
  age: number
}

type FruitType = Omit<Type, 'age'>
const ok = ref<boolean>(true)
const maybeOk = ref<boolean>(true)
const fruits = ref<FruitType[]>([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Grape' },
])
const user = ref<Type>({
  id: 1,
  name: 'Yuma',
  age: 4,
})
</script>
<template>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">maybe OK!</p>
  <p v-else>not OK!</p>
  <button @click="ok = !ok">toggle1</button>
  <button @click="maybeOk = !maybeOk">toggle2</button>
  <template v-if="ok">
    <p>OK!</p>
    <p>Hello</p>
    <p>Hi</p>
  </template>
  <p v-show="ok">OK!</p>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="fruit.id">{{ index }}:{{ fruit.name }}</li>
  </ul>
  <ul>
    <li v-for="({ id, name }, index) in fruits" :key="id">{{ index }}:{{ name }}</li>
  </ul>
  <div v-for="fruit in fruits" :key="fruit.id">
    <p>{{ fruit.id }}</p>
    <input type="text" v-model="fruit.name" />
    {{ fruit.name }}
  </div>
  <template v-for="{ id, name } in fruits" :key="id">
    <template v-if="id === 2">
      <p>{{ id }}</p>
      <p>{{ name }}</p>
    </template>
  </template>
  <p v-for="(value, key, index) in user" :key="value">{{ key }}:{{ value }}({{ index }})</p>
  <p v-for="(n, index) in 10" :key="n">{{ n }}({{ index }})</p>
  <template v-for="fruit of fruits" :key="fruit.id">
    <input type="text" v-model="fruit.name" />{{ fruit.name }}
  </template>
  <button @click="fruits.shift()">削除</button>
</template>
