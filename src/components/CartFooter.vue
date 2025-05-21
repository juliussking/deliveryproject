<template>
    <h2 class="text-sm py-2 font-semibold">Subtotal: R$ {{ subtotal.toFixed(2) }}</h2>
          <div class="btnFinally">
            
            <App-Button 
            textButton="Ir para pagamento"
            colorButton="green"
            colorIntense="700"
            colorHoverIntense="800"
            buttonSize="w-full"
            v-if="cart.length > 0"
            />

            <p @click="$emit('closeSidebarCart')" class="text-center text-sm p-2">ou <a href="#" class="text-red-500">continuar comprando</a></p>
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