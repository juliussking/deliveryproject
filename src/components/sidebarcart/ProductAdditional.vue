<template>
<div class="additionals flex flex-col" v-if="product.category != 'Bebida'">

        <p class="text-sm font-semibold mb-2">Adicionais:</p>
        <div v-if="product.additional.length > 0">
          <p v-for="item in product.additional" :key="item.id" class="text-sm">
            + {{ item.name }} (R$ {{ item.price.toFixed(2) }})
          </p>
          <p class="text-xs font-semibold mt-2">Total: R$ {{ totalAdicionaisProduto(product).toFixed(2) }}</p>
        </div>
        <div v-else>
          <p class="text-sm text-red-400">
            Sem adicionais
          </p>
        </div>
        <hr class="my-2 border-gray-200">
      </div>
</template>

<script setup>
const props = defineProps(['product'])

const totalAdicionaisProduto = (product) => {
  return product.additional.reduce((soma, adicional) => soma + adicional.price, 0)
}
</script>