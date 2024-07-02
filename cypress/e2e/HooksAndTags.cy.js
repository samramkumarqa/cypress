//before
//after
//beforeeach
//aftereach

describe('MyTestSuite', ()=>{

    before(()=>{
        cy.log("***** Launch app *****");
    })

    after(()=>{
        cy.log("***** close App *****");
    })

    beforeEach(()=>{

        cy.log("***** Login *****")

    })

    afterEach(()=>{

        cy.log("***** Logout *****")

    })

    it('search', ()=>{

        cy.log("***** searching *****");

    })

    it('advanced search', ()=>{

        cy.log("***** advanced search *****")
    })
})