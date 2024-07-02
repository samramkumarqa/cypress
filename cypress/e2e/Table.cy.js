
describe('Handle Tables',(()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php");
        //cy.get("#input-username").type("demo");
        //cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        //cy.get(".btn-close").click();
        //Customers--> Customers
        
        cy.get("#menu-customer>a").click(); // customers main menu
        cy.get("#menu-customer>ul>li:first-child").click()// customers sub/child item
            
        
    })
    it('Check number of rows and columns', ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7');
    })

    it('check cell data from specific row and column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr.nth-child(5)>td.nth-child(3)").contains("rs@yopmail.com");
    })

    it('Read all rows and columns from the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(  ($row, index, $rows)=>{

                cy.wrap($row).within( ()=>{

                    cy.get("td").each(($col, index, $cols)=>{
                        cy.log($col.text());
                    })
                })
            })
    })
    it.only('Pagination',()=>{
        //find total number of pages
        /*let totalpages;
        cy.get(".col-sm-6.text-end").then( (e)=>{
            let mytext = e.text(); //showing 1 - 10 of 5581 (550 pages)
            totalpages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 );
            cy.log("Total number of pages in a table=====>"+totalpages);
        })*/
       

        let totalpages = 5;

        for(let p=1;p<=totalpages;p++)
        {
            if(totalpages>1)
                {
                    cy.log("Active page is =="+p);

                    cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                    cy.wait(3000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each( ($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get('td:nth-child(3)').then((e)=>{
                                cy.log(e.text());
                            })
                        })
                    })
                }
            

        }
    })
}))