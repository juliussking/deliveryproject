<template>
  <div class="observation">
    <p class="text-sm font-semibold mb-2">OBS:</p>

    <p class="text-sm text-red-500 whitespace-pre" v-if="product.observation">
      {{ product.observation }}
    </p>

    <p class="text-sm text-red-500 whitespace-pre" v-else>
      Sem observações
    </p>

    <hr class="my-2 border-gray-200">
  </div>
</template>

<script setup>
const props = defineProps(['product'])
</script>