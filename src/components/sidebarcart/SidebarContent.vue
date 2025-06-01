<template>
  <div
    :class="['sidebarCart', 'fixed', 'top-0', 'right-0', 'bg-white', 'w-full', 'md:w-[350px]', { 'mr-[-100%]' : !sidebar } , 'h-full', 'z-3', 'shadow-sm', 'transition-all', 'duration-300', 'ease-in-out']">

    <div :class="['h-full', { 'overflow-y-scroll': cart.length > 0 }]">

      <SidebarHeader />

      <div class="defaultCart flex flex-col items-center h-screen justify-center"
      v-if="!cart.length"
      @click="useCart.closeSidebar()"
      
      >
        <p class="text-center text-gray-400">
          Seu carrinho está vazio! 😰
        </p>
        <p class="text-center text-gray-400">
          Toque para voltar ao menu.
        </p>
      </div>

      <div class="pb-[105px]" v-else>

        <SidebarCardProduct />

      </div>


      <div class="px-2 flex flex-col bg-gray-100 absolute bottom-0 text-end w-full">

        <SidebarFooter />

      </div>

    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SidebarFooter from './SidebarFooter.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarCardProduct from './SidebarCardProduct.vue'

import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()
const { cart, sidebar } = storeToRefs(useCart)



</script>