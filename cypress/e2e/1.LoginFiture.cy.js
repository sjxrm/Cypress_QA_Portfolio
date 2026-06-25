describe('Login Fiture',() => {
    it('User with valid Credentials dan login successfully', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('User with invalid password sees error message', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('randomPass123')
        cy.get('#login-button').click()
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Locked out user cannot login and sees spesific error', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('User with empty username/password sees validation error', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#login-button').click()
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username is required')
    })
})