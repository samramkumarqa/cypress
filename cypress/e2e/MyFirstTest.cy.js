describe ('My First Test', () => {
    it('verify title - positive', () => {
        //steps
        cy.visit("https://amazon.in/")
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    it('verify title - negative', () => {
        //steps
        cy.visit("https://amazon.in/")
        cy.title().should('eq','Online Shopping')
    })
})

