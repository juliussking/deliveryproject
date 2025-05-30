<template>
    <div class="cartTitle relative flex justify-between p-2 bg-gray-200 w-full">

        <div class="icon z-2"
        @click="useCart.closeSidebar()"
        >

          <i 
          class="fa fa-close absolute cursor-pointer text-2xl"
          
          >
        </i>
      </div>
          <h2 class="mx-auto">Carrinho</h2>
        </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
const useCart = useCartStore()

</script>