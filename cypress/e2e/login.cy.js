/// <reference types="cypress" />

context('Funcionalidade Login', () =>{
    it('Deve fazer login com sucesso', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
        cy.get('#username').type("aluno_ebac@teste.com");
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain' , "Logout")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > a').click()
    })

    
    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
        cy.get('#username').type("bac@teste.com");
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain' , "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.")
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
        cy.get('#username').type("aluno_ebac@teste.com");
        cy.get('#password').type('abobora');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain' , "Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?")
    })

    it.only('Deve exibir uma mensagem de erro ao não inserir os itens obrigatórios', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
        cy.get('#password').type('abobora');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain' , "Erro: Nome de usuário é obrigatório.")
    })

    
})