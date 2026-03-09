import { defineStore } from "pinia"
import { ref } from "vue";

const useUserStore = defineStore('user', () => {
    const user = ref<string>('');
    return {
        user
    }
})