<template>
    <div @click="$emit('openSidebarCart')"
        class="notify flex bg-gray-100 w-[50px] h-[50px] rounded-full shadow-sm items-center fixed bottom-5 right-5 lg:right-0  cursor-pointer">
        <i class="fa fa-shopping-cart ml-auto p-3 text-xl" aria-hidden="true">
        </i>
        <div
          class="text-white text-center text-sm notify-counter w-[20px] h-[20px] bg-red-500 absolute right-0 top-0 rounded-full"
          v-if="cart.length > 0">
          {{ cart.length }}
        </div>
      </div>
</template>

<script setup>
import {useCart} from '../composables/useCart.js'

const { cart } = useCart()


const props = defineProps({
  cart: {
    type: Array,
    default: []
  }
})

</script>