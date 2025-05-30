<template>
  <div class="modalContent bg-white w-full h-full z-3 relative overflow-y-scroll pb-[60px]">

    <div
      class="goToBack p-3 cursor-pointer text-2xl text-gray-600 fixed top-3 left-3 w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full shadow-md"
      @click="useModal.closeModal()" v-if="modal">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </div>

    <div class="w-full h-[150px] flex-shrink-0">
      <img :src="`/img/${product.image}`" class="w-full h-full object-cover" alt="product.name">
    </div>

    <div class="productDetails p-3">
      <h2 class="font-semibold text-gray-900 text-4xl">
        {{ product.name }}
      </h2>
      <p v-for="(category, index) in product.category" :key="index" class="text-sm text-gray-400">
        #{{ category }}
      </p>
      <p class="text-gray-800 text-xl mt-2 font-semibold">
        R$ {{ (product.price).toFixed(2) }}
      </p>
      <p class="text-gray-600 text-lg mt-2">
        {{ product.description }}
      </p>
    </div>

    <div class="counter mb-3 p-3">
      <p>Quantidade:</p>
      <button
        class="bg-red-500 hover:bg-red-600 w-14 h-7 text-white rounded-l text-center font-semibold text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        @click="useCart.removeOne(product)" :disabled="product.quantity === 1">
        -
      </button>
      <input type="text" class="w-14 h-7 text-center text-xl bg-gray-100" readonly :value="product.quantity">
      <button
        class="bg-red-500 hover:bg-red-600 text-white text-xl w-14 h-7 rounded-r text-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        :disabled="product.quantity === 10" @click="useCart.addOne(product)">
        +
      </button>
    </div>

    <div class="additional" v-if="product.category != 'Bebida'">

      <div class="productAdditional bg-gray-200">
        <div class="px-3 py-2 flex items-center justify-between relative cursor-pointer"
          @click="openAdditionalSection = !openAdditionalSection">
          <div class="additionalText">
            <h1 class="font-semibold text-gray-900 text-xl">Adicionais</h1>
            <p class="text-sm text-gray-600">Selecione até 5 itens</p>
          </div>

          <i :class="`fa fa-chevron-${ openAdditionalSection ? 'down' : 'right'} mr-3 text-xl`" aria-hidden="true"></i>

        </div>
      </div>




      <div class="items" v-if="openAdditionalSection">

        <div class="item p-5 flex items-center space-x-5 border-b border-gray-200" v-for="item in additional"
          :key="item.id">
          <input v-model="additionalItem" type="checkbox" name="item" id="item" class="w-5 h-5" :value="item"
            @change="additionalChange(additionalItem)">


          <div class="label">

            <label for="item" class="font-semibold text-gray-900 text-lg">+{{ item.name }}</label>
            <p class="text-md text-gray-900 font-semibold">R$ {{ (item.price).toFixed(2) }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="observation p-3">
      <p>Observações:</p>
      <textarea class="w-full h-[150px] p-3 border rounded-md border-gray-300" placeholder="Ex: sem salada, ovo, mostarda" v-model="product.observation"></textarea>
    </div>

    <div class="btnAddToCart flex justify-center">

      <div
        class="p-2 bg-red-500 hover:bg-red-600 text-white cursor-pointer text-center font-semibold w-[170px] fixed bottom-3 rounded-lg"
        @click="useModal.addToCart(product, additionalItem)">
        R$ {{ totalValue.toFixed(2) }} | Adicionar

      </div>
    </div>


  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product, additional, openAdditionalSection, additionalItem, totalValue, modal } = storeToRefs(useModal)

import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()


function additionalChange(additionalItem) {

  const maxAdditional = 5

  if (additionalItem.length > maxAdditional) {
    additionalItem.pop()
  }

}

</script>