<template>
    <div
        class="notify flex bg-gray-100 w-[50px] h-[50px] rounded-full shadow-sm items-center relative cursor-pointer">
        
        <i class="fa fa-shopping-cart ml-auto p-3 text-xl" aria-hidden="true">
        </i>
        <div
          class="text-white text-center text-sm notify-counter w-[20px] h-[20px] bg-red-500 absolute right-0 top-0 rounded-full"
          >
          {{ cart.length }}
        </div>
      </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart';
const useCart = useCartStore()
const { cart } = storeToRefs(useCart)

</script>