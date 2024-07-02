import 'cypress-iframe'


describe("handlling frames",()=>{

    
    it('approach 1',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("mce_0_ifr")
            .its('0.contentDocument.body') //this code refers to the first document in the page
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type("Welcome {cmd + a}");

            cy.get("[aria-label='Bold']").click();
            
    })

    it('approach 2 - by using custom command',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd + a}");
        cy.get("[aria-label='Bold']").click();
            
    })

    it.only('approach 3 - by using cypress-iframe plugin',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded('#mce_0_ifr');  // load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();
            
    })
    

})