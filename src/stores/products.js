import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            { id: 1, name: 'Pizza de Calabresa', price: 28.90, description: 'Deliciosa pizza de calabresa com molho de tomate e muito queijo, presunto e azeitona', category: ['Salgada'], quantity: 1, image: 'calabresa.jpg' },
            { id: 2, name: 'Pizza de Frango', price: 34.90, description: 'Deliciosa pizza de frango', category: ['Salgada'], quantity: 1, image: 'frango.jpg' },
            { id: 3, name: 'Pizza de Queijo com presunto', price: 46.90, description: 'Deliciosa pizza de queijo com presunto', category: ['Salgada'], quantity: 1, image: 'queijo-presunto.jpg' },
            { id: 4, name: 'Pizza Portuguesa', price: 54.90, description: 'Deliciosa pizza de Portuguesa', category: ['Salgada', 'Promoção'], quantity: 1, image: 'portuguesa.jpg' },
            { id: 5, name: 'Pizza de Peperoni', price: 36.90, description: 'Deliciosa pizza de pepperoni', category: ['Salgada'], quantity: 1, image: 'pepperoni.jpg' },
            { id: 6, name: 'Pizza de Banana', price: 22.90, description: 'Deliciosa pizza de banana', category: ['Doce'], quantity: 1, image: 'banana.jpg' },

            //Doces
            { id: 7, name: 'Pizza de Romeu e Julieta', price: 47.90, description: 'Deliciosa pizza de Romeu e Julieta', category: ['Doce', 'Promoção'], quantity: 1, image: 'romeu-julieta.jpg' },
            { id: 8, name: 'Pizza de Chocolate', price: 39.90, description: 'Deliciosa pizza de chocolate', category: ['Doce'], quantity: 1, image: 'chocolate.jpg' },
            { id: 9, name: 'Pizza de Maracuja', price: 39.90, description: 'Deliciosa pizza de maracuja', category: ['Doce'], quantity: 1, image: 'maracuja.jpg' },

            //Bebidas
            { id: 10, name: 'Coca-cola lata 350ml', price: 5.00, description: 'Coca-cola lata 350ml.', category: ['Bebida'], quantity: 1, image: 'coca-350.jpg' },
            { id: 11, name: 'Coca-cola 1,5l', price: 8.90, description: 'Coca-cola 1,5l.', category: ['Bebida'], quantity: 1, image: 'coca-15l.jpg' },
            { id: 12, name: 'Fanta lata 350ml', price: 5.00, description: 'Fanta lata 350ml.', category: ['Bebida'], quantity: 1, image: 'fanta-350.jpg' },
            { id: 13, name: 'Fanta 1,5l', price: 8.90, description: 'Fanta 1,5l.', category: ['Bebida'], quantity: 1, image: 'fanta-15l.jpg' },
            { id: 14, name: 'Sprite lata 350ml', price: 5.00, description: 'Sprite lata 350ml.', category: ['Bebida'], quantity: 1, image: 'sprite-350.jpg' },
            { id: 15, name: 'Sprite 1,5l', price: 8.90, description: 'Sprite 1,5l.', category: ['Bebida'], quantity: 1, image: 'sprite-15l.jpg' },
            { id: 16, name: 'Guarana lata 350ml', price: 5.00, description: 'Guarana lata 350ml.', category: ['Bebida'], quantity: 1, image: 'guarana-350.jpg' },
            { id: 17, name: 'Guarana 1,5l', price: 8.90, description: 'Guarana 1,5l.', category: ['Bebida'], quantity: 1, image: 'guarana-15l.jpg' },

            //Combos
            { id: 19, name: 'Combo Solteiro', price: 27.90, description: 'Deliciosa pizza de Frango 30cm acompanhada de uma Coca-cola lata 350ml e um bolo de pote para a sobremesa.', category: ['Combo', 'Promoção'], quantity: 1, image: 'combo-solteiro.jpg' },
        ],

        selectedCategory: 'Todos'

    }),
    actions: {
        productForCategory(category) {
            this.selectedCategory = category
        }
    },
    getters: {
        productsCategoryList(state) {
            if(this.selectedCategory === 'Todos'){
                return this.products;
            }

            return this.products.filter(prod =>
                prod.category.includes(this.selectedCategory)
            )



        }
    }
})