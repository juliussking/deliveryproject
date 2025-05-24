import { ref, computed } from 'vue'

const products = ref([
    { id: 1, name: 'Pizza de Calabresa', price: 28.90, description: 'Deliciosa pizza de calabresa com molho de tomate e muito queijo, presunto e azeitona', category: ['Salgada'], quantity: 1 },
    { id: 2, name: 'Pizza de Frango', price: 34.90, description: 'Deliciosa pizza de frango', category: ['Salgada'], quantity: 1 },
    { id: 3, name: 'Pizza de Banana', price: 22.90, description: 'Deliciosa pizza de banana', category: ['Salgada'], quantity: 1 },
    { id: 4, name: 'Pizza de Queijo com presunto', price: 46.90, description: 'Deliciosa pizza de queijo com presunto', category: ['Salgada'], quantity: 1 },
    { id: 5, name: 'Pizza de Portuguesa', price: 54.90, description: 'Deliciosa pizza de Portuguesa', category: ['Salgada', 'Promoção'], quantity: 1 },
    { id: 6, name: 'Pizza de Peperone', price: 36.90, description: 'Deliciosa pizza de peperone', category: ['Salgada'], quantity: 1 },
    { id: 7, name: 'Pizza de Romeu e Julieta', price: 47.90, description: 'Deliciosa pizza de Romeu e Julieta', category: ['Doce', 'Promoção'], quantity: 1 },
    { id: 8, name: 'Combo Família', price: 47.90, description: 'Deliciosa pizza de Calabresa 45cm acompanhada de uma Coca-cola 1,5l e um bolo de pote para a sobremesa.', category: ['Combo', 'Promoção'], quantity: 1 },
    { id: 9, name: 'Combo Solteiro', price: 27.90, description: 'Deliciosa pizza de Frango 30cm acompanhada de uma Coca-cola lata 350ml e um bolo de pote para a sobremesa.', category: ['Combo', 'Promoção'], quantity: 1 },
    { id: 10, name: 'Coca-cola lata 350ml', price: 5.00, description: 'Coca-cola lata 350ml.', category: ['Bebida'], quantity: 1 },
])

  const productsPromotion = computed(() => {
    return products.value.filter(prod =>
      prod.category.includes('Promoção')
    )
  })

  const productsSalgadas = computed(() => {
    return products.value.filter(prod =>
      prod.category.includes('Salgada')
    )
  })

    const productsDoces = computed(() => {
    return products.value.filter(prod =>
      prod.category.includes('Doce')
    )
  })

    const productsCombos = computed(() => {
    return products.value.filter(prod =>
      prod.category.includes('Combo')
    )
  })

      const productsBebidas = computed(() => {
    return products.value.filter(prod =>
      prod.category.includes('Bebida')
    )
  })



export const useProducts = () => {

    return {
        products,
        productsPromotion,
        productsSalgadas,
        productsDoces,
        productsCombos,
        productsBebidas

    }

}