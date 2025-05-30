<template>
  <div class="container max-w-4xl min-w-sm mx-auto relative ">

    <div :class="['fixed', 'h-full', 'w-full', { 'ml-[100%]' : !useModal.modal }, 'bg-gray-900/60', 'z-1', 'flex', 'justify-center', 'items-center', 'transition-all', 'duration-300', 'ease-in-out']"
      @click.self="useModal.closeModal()">
      
      <ModalProduct />

    </div>

    <SidebarContent/>

    <div class="cartIcon p-2 fixed bottom-3 right-3 lg:absolute  lg:top-5 lg:right-[-70px] w-[70px] h-[70px]">

      <CartIcon 
      @click="useCart.openSidebar()"
      v-if="!useCart.sidebar"
       />

    </div>

    <div class="flex flex-col items-center">

      <AppLogo />

    </div>

    <div class="flex justify-center w-full overflow-x-scroll flex-nowrap whitespace-nowrap mt-3 sticky top-0 bg-white">

      <Menu />

    </div>

    <Show />



  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import CartIcon from '../components/sidebarcart/CartIcon.vue'
import SidebarContent from '../components/sidebarcart/SidebarContent.vue'
import Menu from '../components/main/Menu.vue'
import AppLogo from '../components/main/AppLogo.vue'
import ModalProduct from '../components/main/ModalProduct.vue'

import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { modal } = storeToRefs(useModal)

import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()

import Show from './Show.vue'

</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
