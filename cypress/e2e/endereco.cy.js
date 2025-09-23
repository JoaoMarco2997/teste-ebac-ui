/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
const endereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamente e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil)
        
    });

    afterEach(() => {
        cy.clearAllCookies()
    });




    it('Cadastro realizado em faturamento com sucesso', () => {
        cy.enderecoFaturamento(endereco)
        
    });
});