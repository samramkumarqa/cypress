    describe('XPathLocators', () => {

    it('find no of products', () =>{

        cy.visit("http://amazon.in")
        cy.xpath("//ul[@class='a-unordered-list a-nostyle a-horizontal feed-carousel-shelf _deals-shoveler-v2_style_list__pjYuB']/li").should('have.length',13)
        
    })

    it('chained xpath', () =>{

        cy.visit("http://amazon.in")
        cy.xpath("//ul[@class='a-unordered-list a-nostyle a-horizontal feed-carousel-shelf _deals-shoveler-v2_style_list__pjYuB']").xpath("./li").should('have.length',13)
        
    })

})