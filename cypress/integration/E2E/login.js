/// <reference types="cypress" />
describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('LF1.Verify that a registered user can log in with valid credentials', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.username, users.password)
            cy.get('mat-toolbar-row ').should('contain', users.username)
            cy.get('app-book-card').eq(0).should('be.visible').and('exist')
        })
    })
    it('LF2.Verify requirements of username and password', () => {
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.get('.mat-card input').each(input => cy.get(input).click().blur())
        cy.contains('Username is required')
        cy.contains('Password is required')
    })

    it('LF3.Verify that the website displays an error message if the user enters an invalid username', () => {
        cy.fixture('users').then((users) => {
            cy.login('invalid', users.password)
            cy.contains('Username or Password is incorrect.')
        })
    })
    it('LF4.Verify that the website displays an error message if the user enters an invalid password', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.username, 'pass')
            cy.contains('Username or Password is incorrect.')
        })
    })

})
