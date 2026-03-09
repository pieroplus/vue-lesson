// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia =  createPinia()

createApp(App).component('BaseIcon', BaseIcon).use(router).use(pinia).mount('#app')
