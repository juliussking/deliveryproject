<template>
    <div>
        <cardProduct v-for="product in productsDoces" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
import cardProduct from '../components/cardProduct.vue'

import { useProducts } from '../composables/useProducts.js'

const {
    productsDoces
 } = useProducts()

</script>