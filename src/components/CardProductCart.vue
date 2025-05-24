<template>
    <div class="flex cardItems p-3 border-b border-gray-200">

            <div class="cardImg w-[100px] h-[100px] flex-shrink-0">
              <img :src="`/deliveryproject/img/${product.image}`" class="rounded-sm w-full h-full object-cover"
                :alt="product.name">
            </div>

            <div class="cardDetails flex-1 ml-3 w-full">
              <h3 class="cardTitle text-base font-semibold">{{ product.name }}</h3>
              <p class="cardDescription text-xs text-gray-400" v-for="(category, index) in product.category" :key="index">#{{ category }}</p>
              <p class="cardDescription text-xs">{{ product.description }}</p>
              
              <h4 class="text-xs mt-2">Quantidade</h4>
              <div class="total ">
                <div>
                  <button
                    class="bg-red-500 hover:bg-red-600 w-10 text-white rounded-l text-center font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    @click="$emit('removeOne', product)" :disabled="product.quantity === 1">
                    -
                  </button>
                  <input type="text" class="w-10 text-center bg-gray-100" readonly :value="product.quantity">
                  <button
                    class="bg-red-500 hover:bg-red-600 text-white w-10 rounded-r text-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    :disabled="product.quantity === 10" @click="$emit('addOne', product)">
                    +
                  </button>
                </div>
              </div>
              <p class="text-gray-400 text-xs font-normal mt-3" >{{ product.quantity }} x R$
                {{ product.price.toFixed(2) }}</p>
              <div class="flex justify-between h-[35px]">
                <p class="cardPrice text-base font-semibold my-2"> R$ {{ (product.price * product.quantity).toFixed(2)
                  }}</p>
          
                <App-Button 
                buttonClass="text-red-500 hover:underline"
                @click="$emit('removeItem', product)"
                
                >Remover item</App-Button>
              </div>
            </div>
          </div>
</template>

<script setup>
import AppButton from '../components/App-Button.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})


</script>