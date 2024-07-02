
describe('CSSLocators',() => {

it("csslocators",()=> {

    cy.visit("https://amazon.in")

    cy.get("#twotabsearchtextbox").type("T-Shirts") //id  tag is optional
    
    cy.get("[value='Go']").click

    //cy.get("[class="a-size-medium-plus a-color-base a-text-bold"]").contains("Results") //Assertion
})
})