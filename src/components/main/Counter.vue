<template>
        <button
          class="bg-red-500 hover:bg-red-600 w-14 h-7 text-white rounded-l text-center font-semibold text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          @click="useCart.removeOne(product)" :disabled="product.quantity === 1">
          -
        </button>
        <input type="text" class="w-14 h-7 text-center text-xl bg-gray-100" readonly :value="product.quantity">
        <button
          class="bg-red-500 hover:bg-red-600 text-white text-xl w-14 h-7 rounded-r text-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          :disabled="product.quantity === 10" @click="useCart.addOne(product)">
          +
        </button>
      
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product} = storeToRefs(useModal)

import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()


</script>