<template>
    <div class="observation p-3">
        <p>Observações:</p>
        <textarea class="w-full h-[150px] p-3 border rounded-md border-gray-300"
          placeholder="Ex: sem salada, ovo, mostarda" v-model="product.observation"></textarea>
      </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product } = storeToRefs(useModal)
</script>