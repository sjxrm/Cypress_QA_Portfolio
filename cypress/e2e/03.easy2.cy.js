describe('Checkboxes', () => {
    it('can check the first checkbox', () => {
        // 1. Open the checkboxes page
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        // 2. Find the first checkbox using inspect
        // 3. Click the checkbox
        cy.get('input[type="checkbox"]').first().check()
        
        // 4. Verify the checkbox is now checked
        cy.get('input[type="checkbox"]').first().should('be.checked')
    })

    it('can uncheck the second checkbox', () => {
        // 1. Open the checkboxes page
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        // 2. Find the second checkbox using inspect
        // 3. Click the checkbox
        cy.get('input[type="checkbox"]').last().uncheck()

        // 4. Verify the checkbox is now unchecked
        cy.get('input[type="checkbox"]').last().should('not.be.checked')
    })
})


describe('Dropdown', () => {
    it('can select Option 1 from the dropdown', () => {
        // 1. Open the dropdown page
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        // 2. Find the dropdown element using inspect
        // 3. Select Option 1
        cy.get('#dropdown').select('Option 1')

        // 4. Verify Option 1 is selected
        cy.get('#dropdown').should('have.value', '1')
    })

    it('can select Option 2 from the dropdown', () => {
        // 1. Open the dropdown page
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        // 2. Find the dropdown element using inspect
        // 3. Select Option 2
        cy.get('#dropdown').select('Option 2')

        // 4. Verify Option 2 is selected
        cy.get('#dropdown').should('have.value', '2')
    })
})