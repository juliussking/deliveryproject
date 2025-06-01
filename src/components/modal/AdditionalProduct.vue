<template>
    <div class="additional" v-if="product.category != 'Bebida'">

        <div class="productAdditional bg-gray-200">
            <div class="px-3 py-2 flex items-center justify-between relative cursor-pointer"
                @click="openAdditionalSection = !openAdditionalSection">
                <div class="additionalText">
                    <h1 class="font-semibold text-gray-900 text-xl">Adicionais</h1>
                    <p class="text-sm text-gray-600">Selecione até 5 itens</p>
                </div>

                <i :class="`fa fa-chevron-${openAdditionalSection ? 'down' : 'right'} mr-3 text-xl`"
                    aria-hidden="true"></i>

            </div>
        </div>




        <div class="items" v-if="openAdditionalSection">

            <div class="item p-5 flex items-center space-x-5 border-b border-gray-200" v-for="item in additional"
                :key="item.id">
                
                <input v-model="additionalItem" type="checkbox" class="w-5 h-5" :value="item"
                    @change="additionalChange(additionalItem)">


                <div class="label">

                    <h2 class="font-semibold text-gray-900 text-lg">+{{ item.name }}</h2>
                    <p class="text-md text-gray-900 font-semibold">R$ {{ (item.price).toFixed(2) }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useModalProductStore } from '@/stores/modalProduct'
const useModal = useModalProductStore()
const { product, additional, openAdditionalSection, additionalItem } = storeToRefs(useModal)


function additionalChange(additionalItem) {

    const maxAdditional = 5

    if (additionalItem.length > maxAdditional) {

        additionalItem.pop()
    }

}
</script>