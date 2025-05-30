<template>
  <div class="items-center w-full mt-3" 
  v-for="product in productsCategoryList" 
  :key="product.id"
  @click="modalProduct(product)"
  >
    <div 
    class="flex border border-gray-200 hover:shadow-sm cursor-pointer items-start gap-4 p-2 transition duration-100"
    >
      <div 
      class="cardImg w-[100px] h-[100px] flex-shrink-0"
      >
        <img 
        :src="`/img/${product.image}`" 
        class="rounded-sm w-full h-full object-cover" alt="product.name"
        >
      </div>
      <div 
      class="cardContent w-full flex flex-col"
      >
        <h2 
        class="font-bold"
        >
            {{ product.name }}
        </h2>
        <p 
        class="text-gray-600 text-xs"
      </p>
          <p 
          class="text-gray-600 text-xs" 
          v-for="(category, index) in product.category" :key="index">
          #{{ category }}
        </p>
        <p 
        class="text-sm w-full">
        {{ product.description }}
      </p>

        <p 
        class="font-bold">
        R$ {{ (product.price).toFixed(2) }}
      </p>


      </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'

import AppButton from '../ui/AppButton.vue'

import {useProductsStore} from '@/stores/products'
const useProducts = useProductsStore()
const {productsCategoryList} = storeToRefs(useProducts)

import {useModalProductStore} from '@/stores/modalProduct'
const useModal = useModalProductStore()

import { useOverlay } from '../../composables/overlay.js'

function modalProduct(product) {
  const { isOverlay } = useOverlay()
  isOverlay.value = true
  useModal.openModal(product)
}




</script>