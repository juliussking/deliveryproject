<template>
  <div class="flex cardItems items-center p-3 border-b border-gray-200" v-for="product in cart" :key="product.id">

    <div class="cardImg w-[100px] h-[100px] flex-shrink-0">
      <img :src="`/img/${product.image}`" class="rounded-sm w-full h-full object-cover" :alt="product.name">
    </div>

    <div class="cardDetails flex-1 ml-3 w-full">
      <h3 class="cardTitle text-base font-semibold">{{ product.name }}</h3>
      <h3 class="cardPrice text-lg text-gray-800 font-semibold">R$ {{ product.price.toFixed(2) }}</h3>
      <p class="cardDescription text-xs text-gray-400" v-for="(category, index) in product.category" :key="index">#{{
        category }}</p>
      <p class="cardDescription text-xs">{{ product.description }}</p>

      <h4 class="text-sm mt-2">Quantidade: {{ product.quantity }}</h4>

      <hr class="my-2 border-gray-200">

      <div class="additionals flex flex-col">
        <p class="text-sm font-semibold mb-2">Adicionais:</p>
        <div v-if="product.additional.length > 0">
          <p v-for="item in product.additional" :key="item.id" class="text-sm">
            + {{ item.name }} (R$ {{ item.price.toFixed(2) }})
          </p>
          <p class="text-xs font-semibold mt-2">Total: R$ {{ totalAdicionaisProduto(product).toFixed(2) }}</p>
        </div>
        <div v-else>
          <p class="text-sm text-red-400">
            Sem adicionais
          </p>
        </div>
      </div>

      <hr class="my-2 border-gray-200">


      <p class="text-gray-400 text-xs font-normal mt-3" v-if="product.quantity > 1">{{ product.quantity }} x R$
        {{ product.price.toFixed(2) }} + R$ {{ totalAdicionaisProduto(product).toFixed(2) }} <span><em> (adicionais) </em></span></p>
      <div class="flex justify-between h-[35px]">
        <p class="cardPrice text-base font-semibold my-2"> R$ {{ totalProduto(product).toFixed(2) }}</p>

        <AppButton 
        buttonClass="text-red-500 hover:underline"
        @click="useCart.removeToCart(product)"
        >
        Remover item
      </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import AppButton from '../ui/AppButton.vue'

import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()
const { cart } = storeToRefs(useCart)


const totalAdicionaisProduto = (product) => {
  return product.additional.reduce((soma, adicional) => soma + adicional.price, 0)
}

const totalProduto = (product) => {
  const adicionais = totalAdicionaisProduto(product)
  return (product.price + adicionais) * product.quantity
}




</script>