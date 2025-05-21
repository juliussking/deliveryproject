<template>
    <button 
            @click="$emit('addToCart')"
            :class="`border bg-${colorButton}-${colorIntense} hover:bg-${colorButton}-${colorHoverIntense} text-xs text-white transition duration-100 py-2 px-3 ${buttonSize} md:w-auto ms-auto rounded-sm ml-auto cursor-pointer`"
            >
                {{ textButton }}
            </button>
</template>

<script setup>
const props = defineProps({

    textButton: {
        type: String,
        default: 'My default button'
    },

    colorButton: {
        type: String,
        default: 'indigo'
    },
    colorIntense: {
        type: [Number, String],
        default: 500
    },
    colorHoverIntense: {
        type: [Number, String],
        default: 500
    },

    buttonSize: {
        type: String,
        default: 'w-auto'
    }


})

const emits = defineEmits(['addToCart'])



</script>