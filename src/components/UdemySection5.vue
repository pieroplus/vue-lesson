<script setup lang="ts">
import CountComponent from '@/components/CountComponent.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>
<template>
  <p class="blue">UdemySection5</p>
  <BaseIcon id="base-button" class="border" />
  <CountComponent id="base-button" class="border" />
  <BaseButton id="base-button" class="border" @click="console.log('UdemySection5.vue')" />
</template>
<style scoped>
.blue {
  color: blue;
}
</style>
