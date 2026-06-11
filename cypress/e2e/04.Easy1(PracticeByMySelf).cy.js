describe('Testing Login', () => {
    it('User with valid credentials can login and go to the Product page', () => {
        // 1. Open the website URL
        cy.visit('https://www.saucedemo.com')
        // 2. Enter valid username
        cy.get('#user-name').clear().type('standard_user')
        // 3. Enter valid password
        cy.get('#password').clear().type('secret_sauce')
        // 4. Click Login
        cy.get('#login-button').click()
        // 5. Go to the products page
        cy.url().should('include','https://www.saucedemo.com/inventory.html')
        cy.get('#inventory_container').should('be.visible')
    })

    it('User with wrong credentials (wrong password) gets an error message', () => {
        // 1. Open the website URL
        cy.visit('https://www.saucedemo.com')
        // 2. Enter valid username
        cy.get('#user-name').clear().type('standard_user')  // The first error happens here
        // 3. Enter invalid password
        cy.get('#password').clear().type('Testing123')
        // 4. Click Login 
        cy.get('#login-button').click()
        // 5. Verify error message
        cy.get('.error-message-container.error').should('be.visible')
        // 6. Check the error text
        cy.get('[data-test="error"]').should('contain', 'Epic sadface') 
    })

    it('locked_out_user cannot login and displays a specific error message', () => {
        // 1. Open the website URL
        cy.visit('https://www.saucedemo.com')
        // 2. Enter valid username
        cy.get('#user-name').clear().type('locked_out_user')
        // 3. Enter valid password 
        cy.get('#password').clear().type('secret_sauce')
        // 4. Click Login
        cy.get('#login-button').click()
        // 5. Verify error is displayed
        cy.get('.error-message-container.error').should('be.visible')
        // 6. Check the error text
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })
})