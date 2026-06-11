describe('Challenge Login', () => {
    it('successfully login with correct credentials', () => {
        // 1. Open the login page of this website
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        // 2. Find the username input element and enter the correct username
        cy.get('#username').type('student')

        // 3. Find the password input using inspect element and enter the correct password
        cy.get('#password').type('Password123')

        // 4. Find the submit button using inspect element and click it
        cy.get('#submit').click()

        // 5. Verify the URL changes after a successful login
        cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/')

        // 6. Verify the successful login message appears
        cy.get('h1').should('have.text', 'Logged In Successfully')
    })

    it('login fails with an incorrect username', () => {
        // 1. Open the login page 
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        // 2. Enter an incorrect username (Any random value)
        cy.get('#username').type('RandomUsername')

        // 3. Enter the correct password
        cy.get('#password').type('Password123')

        // 4. Click the submit button
        cy.get('#submit').click()

        // 5. Verify the URL does not change
        cy.url().should('include', 'https://practicetestautomation.com/practice-test-login/')

        // 6. Verify the error message appears
        cy.get('#error').should('have.text', 'Your username is invalid!')

    })

    it('login fails with an incorrect password', () => {
        // 1. Open the login page
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        // 2. Enter the correct username
        cy.get('#username').type('student')

        // 3. Enter an incorrect password (Any random value)
        cy.get('#password').type('salahNich')

        // 4. Click the submit button
        cy.get('#submit').click()

        // 5. Verify the URL does not change
        cy.url().should('include', 'https://practicetestautomation.com/practice-test-login/')

        // 6. Verify the error message appears
        cy.get('#error').should('have.text', 'Your password is invalid!')
    })
})