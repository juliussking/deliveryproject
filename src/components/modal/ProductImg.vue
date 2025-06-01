<template>
    <div class="w-full h-[150px] flex-shrink-0">
        <img :src="`/img/${product.image}`" class="w-full h-full object-cover" alt="product.name">
      </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product } = storeToRefs(useModal)
</script>