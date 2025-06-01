<template>
  <div
    :class="['fixed', 'h-full', 'w-full', { 'ml-[100%]': !useModal.modal }, 'bg-gray-900/60', 'z-1', 'flex', 'justify-center', 'items-center', 'transition-all', 'duration-300', 'ease-in-out']"
    @click.self="useModal.closeModal()">

    <div class="modalContent bg-white w-full h-full z-3 relative overflow-y-scroll pb-[60px]">

      <div
        class="goToBack p-3 cursor-pointer text-2xl text-gray-600 fixed top-3 left-3 w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full shadow-md"
        @click="useModal.closeModal()" v-if="modal">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </div>

      <ProductImg />


      <ProductDetails />

      <div class="mb-3 p-3">

        <p>Quantidade:</p>

        <Counter />

      </div>

      <AdditionalProduct />

      <InputOBS />

      <div class="btnAddToCart flex justify-center">

        <div
          class="p-2 bg-red-500 hover:bg-red-600 text-white cursor-pointer text-center font-semibold w-[170px] fixed bottom-3 rounded-lg"
          @click="useModal.addToCart(product, additionalItem)">
          R$ {{ totalValue.toFixed(2) }} | Adicionar

        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product, additionalItem, totalValue, modal } = storeToRefs(useModal)

import Counter from '../main/Counter.vue'
import AdditionalProduct from './AdditionalProduct.vue'
import ProductDetails from './ProductDetails.vue'
import ProductImg from './ProductImg.vue'
import InputOBS from './InputOBS.vue'





</script>