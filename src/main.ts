// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import router from './router'

createApp(App).component('BaseIcon', BaseIcon).use(router).mount('#app')
