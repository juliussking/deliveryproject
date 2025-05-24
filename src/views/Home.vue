<template>
  <div class="container max-w-4xl min-w-sm mx-auto pb-3 relative">

    <SidebarCart />


    <CartSidebarOverlay v-if="openSidebarCart" @closeSidebarCart="openSidebarCart = false" />

    <div class="cartIcon p-2 relative">

      <CartIcon @openSidebarCart="openSidebarCart = true" />

    </div>

    <div class="flex flex-col items-center">

      <AppLogo />

    </div>

    <div class="flex justify-center w-full overflow-x-scroll flex-nowrap whitespace-nowrap mt-3">

      <MenuApp />

    </div>

      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import { useCart } from '../composables/useCart.js'

import MenuApp from '../components/MenuApp.vue'
import AppLogo from '../components/AppLogo.vue'
import CartIcon from '../components/CartIcon.vue'
import CartSidebarOverlay from '../components/CartSidebarOverlay.vue'
import SidebarCart from '../components/SidebarCart.vue'

const {
  addToCart,
  openSidebarCart
} = useCart()

</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>



