/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.clearCookies()
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('[name="username"]').type('jm.carvalho.pessoal@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste')
        cy.get('[name="login"]').click()
        cy.get('a > .hidden-xs').should('contain', "Welcome")
    });

    it.only('Login com massa de dados', () => {
        cy.get('[name="username"]').type(perfil.usuario)
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(perfil.senha, {log: false})
        cy.get('[name="login"]').click()
        cy.get('a > .hidden-xs').should('contain', "Welcome")
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('[name="username"]').type('usuario@naocadastrado')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').contains('Erro: O usuário usuario@naocadastrado não está registrado neste site.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('[name="username"]').type('jm.carvalho.pessoal@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senhaErrada')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').contains('Erro: A senha fornecida para o e-mail jm.carvalho.pessoal@gmail.com está incorreta.')
    });

});