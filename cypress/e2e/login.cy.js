/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('jm.carvalho.pessoal@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste')
        cy.get('[name="login"]').click()
        cy.get('a > .hidden-xs').should('contain' , "Welcome") 
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {  
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('usuario@naocadastrado')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').contains('Erro: O usuário usuario@naocadastrado não está registrado neste site.')
    });
    
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {  
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('jm.carvalho.pessoal@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('senhaErrada')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').contains('Erro: A senha fornecida para o e-mail jm.carvalho.pessoal@gmail.com está incorreta.')
    });

});