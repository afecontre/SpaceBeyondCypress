describe("Select Destination", ()=>{

    beforeEach(function (){
        cy.visit('/')

    })
    it("Select Departing Returning ", ()=>{

        cy.fixture('SelectDateDestination').then((index)=>{
            cy.xpath(index.selectDeaparting).click();
            cy.get(index.selectDay).click();
            cy.get(index.selectConfirm).click();
            cy.xpath(index.selectReturning).click();
            cy.get(index.selectDayReturing).last().click();
            cy.get(index.selectConfirm2).last().click();
            cy.xpath('//input[@value="Adults (18+)"]').click();


            }
        )

        it("Select Adult Children", ()=>{



        })
    })
})
