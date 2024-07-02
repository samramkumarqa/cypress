describe('mysuite', ()=>{
    it('NavigationTest', ()=>{
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store"); //Home page

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text',"Cameras") //cameras

        cy.go('back'); // go to home page
        cy.title().should('eq',"Your Store"); //Home page

        cy.go('forward');
        cy.get("div[id='content'] h2").should('have.text',"Cameras") //cameras

        cy.go(-1);
        cy.title().should('eq',"Your Store"); //Home page

        cy.go(1);
        cy.get("div[id='content'] h2").should('have.text',"Cameras") //cameras

        cy.reload();
    })
})