describe('login', () => {
    it('should successfully login with valid credentials', () => {
        // Open login page
        cy.visit('https://the-internet.herokuapp.com/login')

        // Enter valid username and password
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')

        // Click the login button
        cy.get('button[type="submit"]').click()

        // Verify that login is successful by checking the success message
        cy.url().should('include', 'https://the-internet.herokuapp.com/secure')
        cy.get('.flash.success').should('be.visible')
    })
})