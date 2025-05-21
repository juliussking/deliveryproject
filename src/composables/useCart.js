import { ref } from 'vue'
const cart = ref([])


export const useCart = () => {

    
    const products = ref([
        { id: 1, name: 'Pizza de Calabresa', price: 28.90, description: 'Deliciosa pizza de calabresa com molho de tomate e muito queijo, presunto e azeitona', category: 'Salgadas', quantity: 1 },
        { id: 2, name: 'Pizza de Frango', price: 34.90, description: 'Deliciosa pizza de frango', category: 'Salgadas', quantity: 1 },
        { id: 3, name: 'Pizza de Banana', price: 22.90, description: 'Deliciosa pizza de banana', category: 'Salgadas', quantity: 1 },
        { id: 4, name: 'Pizza de Queijo com presunto', price: 46.90, description: 'Deliciosa pizza de queijo com presunto', category: 'Salgadas', quantity: 1 },
        { id: 5, name: 'Pizza de Portuguesa', price: 54.90, description: 'Deliciosa pizza de Portuguesa', category: 'Salgadas', quantity: 1 },
  { id: 6, name: 'Pizza de Peperone', price: 36.90, description: 'Deliciosa pizza de peperone', category: 'Salgadas', quantity: 1 },
  { id: 7, name: 'Pizza de Romeu e Julieta', price: 47.90, description: 'Deliciosa pizza de Romeu e Julieta', category: 'Salgadas', quantity: 1 },
])

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


return {
        cart,
        addToCart,
        products,
        removeItem,
        addOne,
        removeOne
    }
}