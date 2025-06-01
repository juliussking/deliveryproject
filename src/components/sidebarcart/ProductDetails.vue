<template>
    <h3 class="cardTitle text-base font-semibold">{{ product.name }}</h3>
      <h3 class="cardPrice text-lg text-gray-800 font-semibold">R$ {{ product.price.toFixed(2) }}</h3>
      <p class="cardDescription text-xs text-gray-400" v-for="(category, index) in product.category" :key="index">#{{
        category }}</p>
      <p class="cardDescription text-xs">{{ product.description }}</p>

      <h4 class="text-sm mt-2">Quantidade: {{ product.quantity }}</h4>
</template>

<script setup>
const props = defineProps(['product'])

</script>