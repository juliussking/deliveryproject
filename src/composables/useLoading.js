import { ref } from 'vue'

const isLoading = ref(true)

export const useLoading = () => {


    return {
        isLoading,
    }
}