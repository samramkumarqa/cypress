require ('@4tw/cypress-drag-drop')

describe('Mouse Operations',()=>{
    
    it('MouseHover',() => {

        cy.visit("https://demo.opencart.com/")

        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click

        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');
    });

    it('Right click',() => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Approach 1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible');

        //Approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    });

    it('double click', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult'); //load the frame

        //Approach1 - trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

        //Approach2 - dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

    })

    it('Drag and Drop using plugin', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106',{force:true});

    })

    it.only('Scrolling Page',() => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get('#footer').scrollIntoView();
    })
    
})