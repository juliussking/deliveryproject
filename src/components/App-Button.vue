<template>
    <button 
            @click="$emit('addToCart')"
            :class="[`text-xs transition duration-100 py-2 px-3 ms-auto rounded-sm ml-auto cursor-pointer`,
            buttonClass

            ]"
            >
                <slot>My Default Button</slot>
            </button>
</template>

<script setup>
const props = defineProps({

    buttonClass: {
        type: String,
        default: 'bg-gray-400',
    },


})

const emits = defineEmits(['addToCart'])



</script>