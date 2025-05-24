<template>
  <div class="subtotal flex justify-between">
    <p class="text-sm flex items-center">
      {{ cart.length }} itens

    </p>
    <h2 class="text-sm py-2 font-semibold">Subtotal: R$ {{ subtotal.toFixed(2) }}</h2>
  </div>
    <div class="btnFinally">
            
            <App-Button 
            v-if="cart.length > 0"
            buttonClass="w-full bg-green-700 hover:bg-green-800 text-white"
            >
            Ir para pagamento
          </App-Button>

            <p @click="$emit('closeSidebarCart')" class="text-center text-sm p-2">ou <a href="#" class="text-red-500 hover:underline">continuar comprando</a></p>
          </div>
</template>

<script setup>
import AppButton from '../components/App-Button.vue'

const props = defineProps({
  subtotal: {
    type: Number,
    default: 0
  },

  cart: {
    type: Array,
    default: []
  }
});

const emits = defineEmits(['closeSidebarCart'])


</script>