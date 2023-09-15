/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //last.()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it ('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5
        
        cy.get('[class="product-block grid"]')
            .contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    });

    it.only('Deve adicionar produto ao carrinho - Usando comando customizado', () => {
       cy.addProdutos('Abominable Hoodie', 'M' , 'Blue', 3)

    });

    it.only('Deve adicionar produto ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Atlas Fitness Tank', 'S' , 'Blue', 4)
 
     });
});