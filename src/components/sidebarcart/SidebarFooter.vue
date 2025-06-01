<template>
  <div class="subtotal flex justify-between">
    <p 
    class="text-sm flex items-center"
    
    >
      {{ cart.length }} {{ cart.length > 1 ? 'itens' : 'item'}}

    </p>
    <h2 class="text-sm py-2 font-semibold ml-auto">
        Subtotal: R$ {{ subtotal.toFixed(2) }}
    </h2>
  </div>
    <div class="btnFinally">
            
            <AppButton 
            buttonClass="w-full bg-green-700 hover:bg-green-800 text-white"
            v-if="cart.length"
            >
            Ir para pagamento
          </AppButton>

            <p class="text-center text-sm p-2" v-if="cart.length">ou <span 
              class="text-red-500 hover:underline cursor-pointer"
              @click="useCart.closeSidebar()"
              >continuar comprando</span></p>
          </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
const useCart = useCartStore()
const {subtotal, cart} = storeToRefs(useCart)

import AppButton from '../ui/AppButton.vue'


</script>