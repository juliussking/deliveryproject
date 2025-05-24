<template>
    <div
      :class="['sidebarCart', 'fixed', 'top-0', 'right-0', 'bg-white', 'w-[350px]', 'md:w-[350px]', { 'mr-[-350px]' : !openSidebarCart } , 'h-full', 'z-3', 'shadow-sm', 'transition-all', 'duration-300', 'ease-in-out']"
      >


      <div 
      :class="['h-full', { 'overflow-y-scroll': cart.length > 0 }]"
      >

        <SidebarCartHeader 
        @closeSidebarCart="openSidebarCart = false" 
        />

        <div 
        class="defaultCart flex flex-col items-center h-screen justify-center"
        @click="openSidebarCart = false" 
        v-if="cart.length === 0"
        >
          <p 
          class="text-center text-gray-400"
          >
          Seu carrinho está vazio! 😰 
          </p>
          <p 
          class="text-center text-gray-400"
          >
          Toque para voltar ao menu.
          </p>
        </div>

        <div 
        class="cardFullItens pb-[105px]"
        >

          <CardProductCart 
          v-for="product in cart" 
          :key="product.id" 
          :product="product"
          @removeItem="removeItem(product)"
          @removeOne="removeOne(product)"
          @addOne="addOne(product)" 
            />

        </div>


        <div 
        class="cartFooter px-2 flex flex-col bg-gray-100 absolute bottom-0 text-end w-full"
        >

          <CartFooter 
          :subtotal="subtotal" 
          :cart="cart" 
          @closeSidebarCart="openSidebarCart = false"
           />

        </div>

      </div>
    </div>
</template>

<script setup>
import { useCart } from '../composables/useCart.js'
import SidebarCartHeader from '../components/SidebarCartHeader.vue'
import CardProductCart from '../components/CardProductCart.vue'
import CartFooter from '../components/CartFooter.vue'




const { 
    openSidebarCart, 
    products, 
    cart, 
    subtotal, 
    removeOne, 
    addOne,
    removeItem, 
    } = useCart()

</script>