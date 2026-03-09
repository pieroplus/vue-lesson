<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const toAbout = (): void => {
  router.push({ path: '/about' })
  // router.replace({ path: '/about' })
  // router.go(3)
}
</script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }" replace>Home</RouterLink> |
  <RouterLink :to="{ name: 'profile', params: {id: 'yoshipi'}}">Profile</RouterLink> |
  <RouterLink :to="{ name: 'about', query: { lang: 'ja' }, hash: '#title' }">About</RouterLink> |
  <button @click="toAbout">About</button> | <button @click="$router.push('/about')">About</button>

  <div class="container">
    <main>
      <RouterView />
    </main>
    <RouterView name="Sidebar" />
  </div>
  <RouterView name="Footer" />
</template>
<style scoped>
  .container {
    display: flex;
    justify-content: space-evenly;
  }
</style>
