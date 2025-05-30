<template>
    <div>

        
        <div class="flex mt-5 justify-center" v-if="isLoading">
            
            <Loading />
            
        </div>
        
        <div v-else>
            <CardProduct/>
        </div>

    </div>
</template>

<script setup>
import Loading from '../components/ui/Loading.vue'
import CardProduct from '../components/main/CardProduct.vue'

import { useLoading } from '../composables/useLoading.js'
const { 
    isLoading
 } = useLoading()


</script>