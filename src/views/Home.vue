<template>
  <div class="container max-w-4xl mx-auto pb-3 relative">

    <div
      :class="['sidebarCart', 'fixed', 'top-0', !openSidebarCart ? 'left-[100%]' : ['left-[45px]', 'md:left-[77%]'], 'bg-white', ['w-[90%]', 'md:w-[400px]'], 'h-full', 'z-3', 'shadow-sm', 'transition-all', 'duration-300', 'ease-in-out']">


      <div :class="['h-full', { 'overflow-y-scroll': cart.length > 0 }]">

        <SidebarCartHeader @closeSidebarCart="openSidebarCart = false" />

        <div class="defaultCart flex flex-col items-center h-screen justify-center" v-if="cart.length === 0">
          <p class="text-center text-gray-400">Seu carrinho está vazio! 😰 </p>
        </div>

        <div class="cardFullItens pb-[120px]">

          <CardProductCart v-for="product in cart" :key="product.id" :product="product"
            @removeItem="removeItem(product)" @removeOne="removeOne(product)" @addOne="addOne(product)" />

        </div>


        <div class="cartFooter px-2 flex flex-col bg-gray-100 absolute bottom-0 text-end w-full">

          <CartFooter :subtotal="subtotal" :cart="cart" @closeSidebarCart="openSidebarCart = false" />

        </div>

      </div>
    </div>

    <div class="sidebarCart fixed top-0 left-0 bg-gray-900 opacity-60 w-full h-full z-2" v-if="openSidebarCart"
      @click="openSidebarCart = false"></div>

    <div class="cartIcon p-2 relative">

      <CartIcon @openSidebarCart="openSidebarCart = true" />

    </div>

    <div class="flex flex-col items-center">

      <AppLogo />

    </div>

    <div class="flex gap-2 w-full overflow-x-scroll flex-nowrap whitespace-nowrap mt-3">

      <MenuApp />

    </div>

    <CardProduct v-for="product in products" :key="product.id" :product="product" />

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCart } from '../composables/useCart.js'
import AppButton from '../components/App-Button.vue'
import CardProduct from '../components/CardProduct.vue'
import MenuApp from '../components/MenuApp.vue'
import AppLogo from '../components/AppLogo.vue'
import CartIcon from '../components/CartIcon.vue'
import CartFooter from '../components/CartFooter.vue'
import SidebarCartHeader from '../components/SidebarCartHeader.vue'
import CardProductCart from '../components/CardProductCart.vue'

const { addToCart, cart, products, removeItem, removeOne, addOne } = useCart()

const openSidebarCart = ref(false)

const subtotal = computed(() => {
  return cart.value.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
})






</script>