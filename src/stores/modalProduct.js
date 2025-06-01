import { defineStore } from "pinia";
import { useCartStore } from '@/stores/cart'

export const useModalProductStore = defineStore('modalProduct', {
    state: () => ({

        product: {},

        modal: false,

        openAdditionalSection: false,

        additional: [
            { id: 1, name: 'Alho', price: 3.00 },
            { id: 2, name: 'Queijo', price: 5.00 },
            { id: 3, name: 'Borda recheada', price: 8.00 },
            { id: 4, name: 'Cebola roxa', price: 5.00 },
            { id: 5, name: 'Catupiry', price: 5.00 },
            { id: 6, name: 'Cheddar', price: 5.00 },
            { id: 7, name: 'Mussarela', price: 5.00 },
            { id: 8, name: 'Ovo', price: 5.00 },
            { id: 9, name: 'Presunto', price: 5.00 },
            { id: 10, name: 'Tomate', price: 5.00 },
            { id: 11, name: 'Azeitona', price: 5.00 },
            { id: 12, name: 'Bacon', price: 5.00 },
            { id: 13, name: 'Calabresa', price: 5.00 },
            { id: 14, name: 'Frango', price: 5.00 },
        ],
        additionalItem: [],
    }),
    actions: {
        openModal(product) {
            this.modal = true
            this.product = product
        },
        closeModal() {
            this.modal = false
            this.additionalItem = []
            this.openAdditionalSection = false
        },

        addToCart(product, additionalItem) {
            const cartStore = useCartStore()
            cartStore.addToCart(product, additionalItem)
            this.additionalItem = []
            this.closeModal()
        },
    },
    getters: {


        totalValue(state) {
            const productTotal = state.product.price * state.product.quantity;
            const additionalTotal = state.additionalItem.reduce((total, item) => total + item.price, 0) * state.product.quantity;

            return productTotal + additionalTotal;
        }

    }
})