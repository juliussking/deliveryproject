import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],

        sidebar: false

    }),
    actions: {

        toggleSidebar() {
            this.sidebar = !this.sidebar
        },
        openSidebar() {
            this.sidebar = true
        },
        closeSidebar() {
            this.sidebar = false
        },

        addToCart(product, additionalItem) {
            this.cart.push({
                ...product,
                additional: [...additionalItem]
            })

        },

        removeToCart(product) {
            const index = this.cart.findIndex(item => item.id === product.id)

            this.cart.splice(index, 1)
        },

        addOne(product) {
            product.quantity++
        },

        removeOne(product) {
            product.quantity--
        },

    },
    getters: {
        subtotal(state) {
            return state.cart.reduce((total, item) => {
                const totalAdditional = item.additional.reduce((soma, adicional) => soma + adicional.price, 0);
                const totalItem = (item.price + totalAdditional) * item.quantity;
                return total + totalItem
            }, 0)

        },

        totalAdditional(state) {
            return state.cart.reduce((total, item) => {
                const totalAdditional = item.additional.reduce((soma, adicional) => soma + adicional.price, 0);
                return total + totalAdditional
            }, 0)
        },



    }
})