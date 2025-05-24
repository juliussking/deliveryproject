import { ref, computed } from 'vue'

import { useProducts } from './useProducts'
const { products } = useProducts()

const cart = ref([])
const openSidebarCart = ref(false)

export const useCart = () => {

function addToCart(product) {
    
        const index = cart.value.findIndex(item => item.id === product.id)

        if (index >= 0) {
            cart.value[index].quantity++
            return
        }
        
        cart.value.push(product)
}

    function removeItem(product) {
  const index = cart.value.findIndex(item => item.id === product.id)

  if (index >= 0) {
    cart.value.splice(index, 1)
  }
}

function addOne(product) {

  product.quantity++

}

function removeOne(product) {
  if (product.quantity > 1) {
    product.quantity--
  }
}

const subtotal = computed(() => {
  return cart.value.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
})


return {
        cart,
        addToCart,
        products,
        removeItem,
        addOne,
        removeOne,
        openSidebarCart,
        subtotal,

    }
}