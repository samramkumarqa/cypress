describe('Custom commands',() => {

    it("handling links", () => {

        cy.visit("https://demo.nopcommerce.com/")

        //direct - without using custom command 
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        
        //using custom command
        cy.clickLink('Apple MacBook Pro 13-inch')

        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it.only("overwriting existing command", ()=>{
        cy.visit("https://demo.nopcommerce.com/")
        //using custom command
        cy.clickLink('APPLE MACBOOK PRO 13-inch')

        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it("Login command", () => {
        cy.visit("https://demo.nopcommerce.com/")
        //Login
        cy.clickLink("Log in"); //custom command
        cy.wait(3000)
        cy.loginapp("testing@gmail.com","test123");

        cy.get('.ico-account').should('have.text', 'My account')

    })
})