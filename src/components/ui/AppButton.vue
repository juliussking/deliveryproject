<template>
    <button 
            
            :class="[`text-xs transition duration-100 py-3 px-3 rounded-sm cursor-pointer`,
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

</script>