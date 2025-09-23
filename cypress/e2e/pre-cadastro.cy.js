/// <reference types="cypress" />
var faker = require('faker');
const Faker = require('faker/lib');

describe('Funcionalidade de Cadastro', () => {

    let firstNameFaker = faker.name.firstName()
    let lastNameFaker = faker.name.lastName()
    let emailFaker = faker.internet.email(firstNameFaker + lastNameFaker)
    let passwordFaker = faker.internet.password()

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.clearCookies()
    });



    it('Cadastro realizado com sucesso', () => {
        cy.get('[name="email"]').type(emailFaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type('senhaForte01!')
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(firstNameFaker)
        cy.get('[name="account_last_name"]').type(lastNameFaker)
        cy.get('[name="save_account_details"]').click()
        cy.get('.woocommerce-message').should('contain', "Detalhes da conta modificados com sucesso")

    });

    it.only('Realizando cadastro com custom commands', () => {
        cy.preCadastro(emailFaker, passwordFaker, firstNameFaker, lastNameFaker)
    });









});







