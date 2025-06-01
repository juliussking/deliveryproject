import { defineStore } from "pinia";

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        category: [
            { id: 1, name: 'Todos' },
            { id: 2, name: 'Promoção' },
            { id: 3, name: 'Salgada' },
            { id: 4, name: 'Doce' },
            { id: 5, name: 'Bebida' },
            
        ],

        loading: true

    }),
    actions: {
        
    },
    getters: {}
})