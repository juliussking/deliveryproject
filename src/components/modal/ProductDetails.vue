<template>
    <div class="productDetails p-3">
        <h2 class="font-semibold text-gray-900 text-4xl">
          {{ product.name }}
        </h2>
        <p v-for="(category, index) in product.category" :key="index" class="text-sm text-gray-400">
          #{{ category }}
        </p>
        <p class="text-gray-800 text-xl mt-2 font-semibold">
          R$ {{ product.price?.toFixed(2) }}
        </p>
        <p class="text-gray-600 text-lg mt-2">
          {{ product.description }}
        </p>
      </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product } = storeToRefs(useModal)
</script>