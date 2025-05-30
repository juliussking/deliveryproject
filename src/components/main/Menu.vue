<template>
  <div class="categoryMenu">
    <ul class="flex">
      <li :class="[
        'cursor-pointer hover:bg-gray-100 py-1 px-4',
        selectedCategory === category.name ? 'border-b-3 border-red-500 font-semibold' : ''
      ]" v-for="category in category" :key="category.id" @click="listProduct(category.name)">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useLoading } from '../../composables/useLoading.js'


import { useCategoriesStore } from '@/stores/categories'
const useCategories = useCategoriesStore()
const { category } = storeToRefs(useCategories)

import { useProductsStore } from '@/stores/products'
const useProducts = useProductsStore()
const { selectedCategory, productForCategory } = storeToRefs(useProducts)

function listProduct(category) {
  const { isLoading } = useLoading()

  isLoading.value = true
  
  useProducts.productForCategory(category)
  
  setTimeout(() => {
    
    isLoading.value = false

  }, 1000);
}




</script>

<style scoped>
.router-link-active {
  font-weight: 500;
  padding: 2px;
  border-bottom: 3px solid red;

}
</style>