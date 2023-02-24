/// <reference types="cypress" />
describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    it('LF1.Verify that a registered user can log in with valid credentials', () => {
        cy.get('#mat-input-0').type('john_doe')
        cy.get('#mat-input-1').type('password')
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.url().should('include', '/dashboard') // Make sure the URL includes '/dashboard'
    })
    it('LF2.Verify requirements of username and password', () => {
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.get('.mat-card input').each(input => cy.get(input).click().blur())
        cy.contains('Username is required')
        cy.contains('Password is required')
    })

    it('LF3.Verify that the website displays an error message if the user enters an invalid username', () => {
        cy.get('#mat-input-0').type('invalid')
        cy.get('#mat-input-1').type('password')
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.contains('Username or Password is incorrect.')
    })
    it('LF4.Verify that the website displays an error message if the user enters an invalid password', () => {
        cy.get('#mat-input-0').type('login')
        cy.get('#mat-input-1').type('invalid')
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.contains('Username or Password is incorrect.')
    })


})
