<script setup lang="ts">
import { computed, ref } from 'vue'
import { type Foods } from '@/types/type'
import FoodCard from './FoodCard.vue'
const foods = ref<Foods[]>([
  { name: '寿司', emoji: '🍣' },
  { name: 'ハンバーガー', emoji: '🍔' },
  { name: '焼肉', emoji: '🥩' },
  { name: '麺系', emoji: '🍜' },
  { name: 'たこ焼き', emoji: '🐙' },
  { name: 'おでん', emoji: '🍢' },
  { name: '丼系', emoji: '🍚' },
  { name: 'オムライス', emoji: '🥚' },
  { name: 'イタリアン', emoji: '🇮🇹' },
  { name: '中華料理', emoji: '🇨🇳' },
  { name: 'とんかつ', emoji: '🐖' },
  { name: '韓国料理', emoji: '🇰🇷' },
  { name: 'カレー', emoji: '🍛' },
  { name: '鍋系', emoji: '🍲' },
  { name: '居酒屋', emoji: '🏮' },
  { name: 'ファミレス', emoji: '🍽️' },
])
const pickedFoodIndex = ref<number>(0)
const newFoodIndex = ref<number>(1)
const selectMaxIndex = ref<number>(1)
const isLast = computed(():boolean => {
  return foods.value.length <= newFoodIndex.value || foods.value.length <= pickedFoodIndex.value;
})
const pickFood = (click: string): void => {
  selectMaxIndex.value++
  if (isLast.value) return;
  if (click === 'upChoise') {
    newFoodIndex.value = selectMaxIndex.value
  } else {
    pickedFoodIndex.value = selectMaxIndex.value
  }
}
</script>
<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard
      :name="foods[pickedFoodIndex]?.name"
      :emoji="foods[pickedFoodIndex]?.emoji"
      @click="pickFood('upChoise')"
    />
    <template v-if="!isLast">
      <p>VS</p>
      <FoodCard
        :name="foods[newFoodIndex]?.name"
        :emoji="foods[newFoodIndex]?.emoji"
        @click="pickFood('downChoise')"
      />
    </template>
  </main>
</template>
<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}
.title {
  margin-bottom: 60px;
}
</style>
