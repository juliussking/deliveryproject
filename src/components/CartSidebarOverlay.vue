<template>
    <div class="sidebarCart fixed top-0 left-0 bg-gray-900 opacity-60 w-full h-full z-2 lg:hidden"
        @click="$emit('closeSidebarCart')"></div>
</template>

<script setup>

const emits = defineEmits(['closeSidebarCart'])


</script>