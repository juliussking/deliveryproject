<template>
    <p class="text-gray-400 text-xs font-normal mt-3" v-if="product.quantity > 1">{{ product.quantity }} x R$
        {{ product.price.toFixed(2) }} <span v-if="product.additional.length > 0"><em>  + R$ {{ totalAdicionaisProduto(product).toFixed(2) }} (adicionais)
          </em></span></p>
      <div class="flex justify-between h-[35px]">
        <p class="cardPrice text-base font-semibold my-2"> R$ {{ totalProduto(product).toFixed(2) }}</p>

        <AppButton buttonClass="text-red-500 hover:underline" @click="useCart.removeToCart(product)">
          Remover item
        </AppButton>
      </div>
</template>

<script setup>
const props = defineProps(['product'])

import { useCartStore } from '@/stores/cart';
const useCart = useCartStore()

import AppButton from '../ui/AppButton.vue';

const totalProduto = (product) => {
  const adicionais = totalAdicionaisProduto(product)
  return (product.price + adicionais) * product.quantity
}

const totalAdicionaisProduto = (product) => {
  return product.additional.reduce((soma, adicional) => soma + adicional.price, 0)
}

</script>
