describe('SauceDemo Shopping Flow', function() {
    beforeEach(function() {
        // 1. Load data from saucedemo.json fixture
        cy.fixture('saucedemo').then((saucedemo) => {
            // 2. Save with alias 'data'
            cy.wrap(saucedemo).as('data')
            // 3. Open the saucedemo page
            cy.visit('https://www.saucedemo.com/')
            // 4. Login with username and password from fixture and click login
            cy.get('#user-name').type(saucedemo.username)
            cy.get('#password').type(saucedemo.password)
            cy.get('#login-button').click()
        })    
    })

    it('successfully login and products page appears', function() {
        // 1. Verify URL contains /inventory
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
        // 2. Verify there is an element with class 'inventory_list' and it is visible
        cy.get('.inventory_list').should('be.visible')
    })

    it('successfully adds an item to the cart', function() {
        // 1. Click the Add to Cart button on the first item
        // hint: inspect the add to cart button, check its selector
        cy.get('.inventory_list .inventory_item').first().find('button').click()

        // 2. Verify the number badge on the cart icon changes to '1'
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('successfully completes checkout', function() {
        // 1. Add the first item to the cart
        cy.get('.inventory_list .inventory_item').first().find('button').click()
        // 2. Click the cart icon
        cy.get('.shopping_cart_link').click()
        // 3. Click the checkout button
        cy.get('#checkout').click()
        // 4. Enter first name from fixture
        cy.get('#first-name').type(this.data.firstName)
        // 5. Enter last name from fixture
        cy.get('#last-name').type(this.data.lastName)
        // 6. Enter zip code from fixture
        cy.get('#postal-code').type(this.data.zipCode)
        // 7. Click the continue button
        cy.get('#continue').click()
        // 8. Click finish to complete the checkout
        cy.get('#finish').click()
        // 9. Verify the text 'Thank you for your order!' appears on the checkout complete page
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
        
    })

})