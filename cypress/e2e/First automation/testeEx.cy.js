// <reference types="cypress" />
describe("Criar um Cliente", () => {
    it("add to cart", () => {
      cy.visit('/');
      cy.viewport(1280, 720);
      
      cy.get('a.main-buttons')
        .contains('Entrar')
        .click();
  
      cy.origin('https://auth.sgbr.com.br', () => {
        cy.get("#username").type("herpetolucas@gmail.com");
        cy.get("#password").type("TESTE123@");
        cy.get("#kc-login").click();
      });
  
      cy.url().should("include", "/empresas"); 

      //Prox passo
      //Entrar na empresa
      cy.get(':nth-child(8) > .tw-flex-col > .tw-flex > .main-buttons').click();

      //Selecionar a seção de produtos
      cy.get(':nth-child(4) > .q-expansion-item > .q-expansion-item__container > .q-item > .q-item__section--main > .tw-relative').click();
      cy.get('h1').should('contain', 'Produtos');

      //Criar novo produto
      cy.get('.flex > .q-btn').click();
    });
  });
  