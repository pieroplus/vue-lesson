<script setup lang="ts">
import { ref, reactive, type Ref } from 'vue'

type StudentType = {
  students: number
  rating: number
}

type InstructorType = {
  name: string
  age: number
  sns: {
    twitter: string
    youtube: string
  }
  email: Ref<string>
}

const price = ref<number>(9.99)
const increment = (): void => {
  price.value += 1
  console.log(price.value)
}
const info = ref<StudentType>({
  students: 1000,
  rating: 4,
})
const instructor = reactive<InstructorType>({
  name: 'Taro',
  age: 25,
  sns: {
    twitter: '@pieroplus',
    youtube: '@pieroplus',
  },
  email: ref('pieroplus@yahooc.co.jp'),
})
console.log(info.value.students)
const { name, age } = instructor
console.log(name, age)
console.log(instructor.email)
</script>

<template>
  <h3>${{ price }}</h3>
  <button v-on:click="increment">button</button>
  <h2>{{ info.students }}</h2>
  <h3>{{ instructor.age }}</h3>
</template>
