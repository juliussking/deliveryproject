<template>
    <div class="cardImg w-[100px] h-[100px] flex-shrink-0">
      <img :src="`/img/${product.image}`" class="rounded-sm w-full h-full object-cover" :alt="product.name">
    </div>
</template>

<script setup>
const props = defineProps(['product'])
</script>