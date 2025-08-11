/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<void>;
        }
    }
}

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('/');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
    cy.contains('Accounts Overview').should('be.visible');
});


export {};
