describe('Form Text Box', () => {
    beforeEach(() => {
        // 1. Open the text box page
        cy.visit('https://demoqa.com/text-box')
        // 2. Load data from textbox.json fixture
        cy.fixture('textbox').then((textbox) => {
            // 3. Save the result so it can be used in every 'it' block
            // hint: use .as('alias') to save, then call this.aliasName in the 'it' block
            cy.wrap(textbox).as('textbox')
        })
    })

    it('successfully submits the form with valid data', function() {
        // 1. Enter full Name from fixture data
        cy.get('#userName').type(this.textbox.name)
        // 2. Enter Email from fixture data
        cy.get('#userEmail').type(this.textbox.email)
        // 3. Enter Current Address from fixture data
        cy.get('#currentAddress').type(this.textbox.currentAddress)
        // 4. Enter Permanent Address from fixture data
        cy.get('#permanentAddress').type(this.textbox.permanentAddress)
        // 5. Click the submit button
        cy.get('#submit').click()
        // 6. Verify #output contains the correct name
        cy.get('#output').should('contain', this.textbox.name)
        // 7. Verify #output contains the correct email
        cy.get('#output').should('contain', this.textbox.email) 
        
        // Question: Where does #output come from? (Hapus baris ini sebelum push ke GitHub)
    })

    it('invalid email displays an error border', function() {
        // 1. Enter full Name from fixture data
        cy.get('#userName').type(this.textbox.name)
        // 2. Enter Email with invalid data from fixture
        cy.get('#userEmail').type(this.textbox.invalidEmail)
        // 3. Enter Current Address from fixture data
        cy.get('#currentAddress').type(this.textbox.currentAddress)
        // 4. Click the submit button
        cy.get('#submit').click()
        // 5. Verify email input has the error class 'field-error'
        cy.get('#userEmail').should('have.class', 'field-error') 
        
        // Question: Where does the field-error class come from? I checked in devtools and there is no field-error class. (Hapus baris ini sebelum push ke GitHub)
    })
})