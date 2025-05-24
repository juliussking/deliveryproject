<template>
    <div>

        <div class="flex mt-5 justify-center" v-if="isLoading">

            <Loading />

        </div>
        <div v-else>
            <cardProduct v-for="product in productsDoces" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import Loading from '../components/Loading.vue'
import cardProduct from '../components/cardProduct.vue'

import { useProducts } from '../composables/useProducts.js'
import { useLoading } from '../composables/useLoading.js'

const { isLoading } = useLoading()

const {
    productsDoces
} = useProducts()

</script>