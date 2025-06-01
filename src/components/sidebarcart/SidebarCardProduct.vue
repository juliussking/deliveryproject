<template>
  <div class="flex cardItems p-3 border-b border-gray-200" v-for="product in cart" :key="product.id">

    <ProductImg :product="product" />

    <div class="cardDetails flex-1 ml-3 w-full">

      <ProductDetails :product="product" />

      <hr class="my-2 border-gray-200">


      <ProductAdditional :product="product" />

      <ProductOBS :product="product" />

      <ItemTotal :product="product" />

    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()
const { cart } = storeToRefs(useCart)

import ProductOBS from './ProductOBS.vue'
import ProductAdditional from './ProductAdditional.vue'
import ItemTotal from './ItemTotal.vue'
import ProductDetails from './ProductDetails.vue'
import ProductImg from './ProductImg.vue'


</script>