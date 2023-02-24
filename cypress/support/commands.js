// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
    cy.get('#mat-input-0').type(username)
    cy.get('#mat-input-1').type(password)
    cy.get('.mat-card-actions > .mat-focus-indicator').click()
})
Cypress.Commands.add('loginAfterRegister', (username, password) => {
    cy.get('#mat-input-5').type(username)
    cy.get('#mat-input-6').type(password)
    cy.get('.mat-card-actions > .mat-focus-indicator').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
