import { ref } from 'vue'

const isOverlay = ref(false)

export const useOverlay = () => {


    return {
        isOverlay,
    }
}