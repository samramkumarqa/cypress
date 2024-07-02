describe('handle dropdowns',()=>{

    it.skip('dropdown with select', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country').select('Japan').should('have.value','Japan')

    })

    it.skip('dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Italy')

    })

    it.skip('auto suggested dropdown', ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
        
    })

    it('auto suggested dropdown', ()=>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation tool')
                {
                    cy.wrap($el).click()
                }
        })
        
        cy.get("input[name=q]").should('have.value','cypress automation tool')
    })
})