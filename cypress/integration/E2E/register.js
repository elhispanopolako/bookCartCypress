/// <reference types="cypress" />

import RandomData from "../../support/randomData"

const user = new RandomData()
const username = user.getUsername()
const usernameAPI = user.getUsername()
const password = user.getPassword()
describe('Register page', () => {
    beforeEach(() => {
        cy.visit('/register')
        cy.intercept({ method: 'POST', url: '/api/user/' }).as('createUser')
        cy.intercept({ method: 'GET', url: `/api/user/validateUserName/${username}` }).as('validateUser')
    })
    it('RF1.User can register with valid credentials', () => {
        cy.get('#mat-input-0').type(user.getName())
        cy.get('#mat-input-1').type(user.getLastname())
        cy.get('#mat-input-2').type(username)
        cy.get('#mat-input-3').type(password)
        cy.get('#mat-input-4').type(password)
        cy.contains(user.getGender()).click()
        cy.get('.mat-card-actions').contains('Register').click()
        cy.wait('@validateUser').its('response.statusCode').should('eq', 200)
        cy.get('.mat-card-actions').contains('Register').click({ force: true })
        cy.wait('@createUser').its('response.statusCode').should('eq', 200)
        cy.url().should('include', '/login')
        cy.writeFile('cypress/fixtures/users.json', { username: `${username}`, password: `${password}` })
        cy.fixture('users').then((users) => {
            cy.loginAfterRegister(users.username, users.password)
            cy.get('mat-toolbar-row ').should('contain', username)
        })
    })
    it('RF2.Website displays an error message if the user attempts to register with an email address or username that is already in use', () => {
        cy.fixture('users').then((users) => {
            cy.intercept({ method: 'GET', url: `/api/user/validateUserName/${users.username}` }).as('validateUser')
            cy.get('#mat-input-0').type(user.getName())
            cy.get('#mat-input-1').type(user.getLastname())
            cy.get('#mat-input-2').type(users.username)
            cy.get('#mat-input-3').type(users.password)
            cy.get('#mat-input-4').type(users.password)
            cy.contains(user.getGender()).click()
            cy.get('.mat-card-actions').contains('Register').click()
            cy.wait('@validateUser').should(res => {
                expect(res.response.statusCode).to.be.equal(200)
                expect(res.response.body).to.be.equal(true)
            })
            cy.contains('User Name is not available')

        })

    })

    it('RF3.Website requires the user to confirm their password and displays an error message if the passwords do not match', () => {
        cy.get('#mat-input-0').type(user.getName())
        cy.get('#mat-input-1').type(user.getLastname())
        cy.get('#mat-input-2').type(user.getUsername())
        cy.get('#mat-input-3').type(user.getPassword())
        cy.get('#mat-input-4').type(user.getPassword())
        cy.contains(user.getGender()).click()
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.contains('Password do not match')
    })
    it('RF4.Website enforces password complexity requirements', () => {
        cy.get('#mat-input-3').type('easyPass')
        cy.contains(user.getGender()).click()
        cy.contains('Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number')
    })
    it('RF5.Register using API', () => {
        cy.request({ method: 'GET', url: `/api/User/validateUserName/${usernameAPI}`, })
            .then(res => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.be.equal(false)
            })
        cy.request({
            method: 'POST', url: '/api/User', body: {
                "userId": 0,
                "firstName": user.getName(),
                "lastName": user.getLastname(),
                "username": usernameAPI,
                "password": user.getPassword(),
                "gender": user.getGender(),
                "userTypeId": 0
            }
        }).then(res => {
            expect(res.status).to.be.equal(200)
            cy.request({ method: 'GET', url: `/api/User/validateUserName/${usernameAPI}`, })
                .then(res => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).to.be.equal(true)
                })
        })
    })


})
