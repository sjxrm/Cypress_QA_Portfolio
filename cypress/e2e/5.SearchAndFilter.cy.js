describe('Search & Filter', function() {
    beforeEach(function() {
        cy.fixture('saucedemo').then((saucedemo) => {
            cy.wrap(saucedemo).as('TestNich')
            // Login
            cy.visit('https://www.saucedemo.com/')
            // Username
            cy.get('#user-name').type(saucedemo.username)
            // Password
            cy.get('#password').type(saucedemo.password)
            // Button Login
            cy.get('#login-button').click()
        })
    })

    it('Successfully Login', function() {
        cy.url().should('include','https://www.saucedemo.com/inventory.html')

        // Verifikasi already login into website
        cy.get('.inventory_list').should('be.visible')
    }) 

    it('Product can be sorted by name A to Z', function() {
        // get Selector
        cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')

        // Makesure correct filter
        cy.get('.inventory_item_name').first().should('have.text','Sauce Labs Backpack')
    })

    it('Product can be sorted by name Z to A', function() {
        // get Selector
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')

        // Makesure Correct Filter
        cy.get('.inventory_item_name').first().should('have.text','Test.allTheThings() T-Shirt (Red)')
    })

    it('Product can be sorted by Price low to high', function() {
        // get Selector
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

        // Makesure Correct Filter
        cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Onesie')
    })

    it('Product can be sorted by Price high to low', function() {
        // get Selector
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')

        // Makesure correct filter
        cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Fleece Jacket')
    })
})