<template>
  <div class="salgadas-wrapper">
    <cardProduct v-for="product in productsSalgadas" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import cardProduct from '../components/cardProduct.vue'

import { useProducts } from '../composables/useProducts.js'

const {
    productsSalgadas,
 } = useProducts()

</script>