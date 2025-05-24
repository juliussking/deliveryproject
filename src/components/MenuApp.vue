<template>
  <div class="px-4 py-2 text-sm hover:bg-red-200 transition-all ease-in-out duration-100 w-auto">
    <router-link :to="{ name: 'todos' }">Todos</router-link>
  </div>
  <div class="px-4 py-2 text-sm hover:bg-red-200 transition-all ease-in-out duration-100">
    <router-link :to="{ name: 'promo' }">Promoções</router-link>
  </div>
  <div class="px-4 py-2 text-sm hover:bg-red-200 transition-all ease-in-out duration-100">
    <router-link :to="{ name: 'salgadas' }">Salgadas</router-link>
  </div>
  <div class="px-4 py-2 text-sm hover:bg-red-200 transition-all ease-in-out duration-100">
    <router-link :to="{ name: 'doces' }">Doces</router-link>
  </div>
  <div class="px-4 py-2 text-sm hover:bg-red-200 transition-all ease-in-out duration-100">
    <router-link :to="{ name: 'combos' }">Combos</router-link>
  </div>
  <div class="px-4 py-2 text-sm hover:bg-red-200 transition-all ease-in-out duration-100">
    <router-link :to="{ name: 'bebidas' }">Bebidas</router-link>
  </div>
</template>

<style scoped>

.router-link-active {
  font-weight: 500;
  padding: 2px;
  border-bottom: 3px solid red;

}
</style>