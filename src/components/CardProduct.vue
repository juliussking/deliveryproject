<template>
  <div class="items-center w-full mt-3">
    <div class="flex border border-gray-200 shadow-sm items-start gap-4 p-2 transition duration-100">
      <div class="cardImg w-[100px] h-[100px] flex-shrink-0">
        <img :src="`/deliveryproject/img/${product.image}`" class="rounded-sm w-full h-full object-cover" :alt="product.name">
      </div>
      <div class="cardContent w-full flex flex-col">
        <h2 class="font-bold">{{ product.name }}</h2>
        <p class="text-gray-600 text-xs" v-for="(category, index) in product.category" :key="index">#{{ category }}</p>
        <p class="text-sm w-full">{{ product.description }}</p>

        <p class="font-bold">R$ {{ product.price.toFixed(2) }}</p>


        <div class="ml-auto">

          <App-Button @addToCart="addToCart(product)" buttonClass="bg-red-500 hover:bg-red-600 text-white">
            Adicionar ao carrinho
          </App-Button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '../components/App-Button.vue'
import { useCart } from '../composables/useCart.js'

const { addToCart } = useCart()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>