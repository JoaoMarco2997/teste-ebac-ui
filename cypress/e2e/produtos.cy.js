/// <reference types= "cypress" />
const faker = require('faker');
const Faker = require('faker/lib');

describe('Selecionando produtos da lista e autenticando carrinho de compras' , () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.clearCookies()
    });

    it('Selecionando produtos da lista', () => {
        cy.get('.product-block').eq(1).click()
        
    });

    it.only('Adicionando produto ao carrinho', () => {
        let quantidade = 3
        cy.get('.product-block').eq(1).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').contains(quantidade)
        
    });










})