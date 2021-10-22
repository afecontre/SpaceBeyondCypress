describe("Select Destination", () => {

    beforeEach(function () {
        cy.visit('/')

    })
    it("Select Departing Returning ", () => {

        cy.fixture('SelectDateDestination').then((SelectDateDestination) => {
            cy.xpath(SelectDateDestination.selectDeaparting).click();
            cy.get(SelectDateDestination.selectDay).click();
            cy.get(SelectDateDestination.selectConfirm).click();
            cy.xpath(SelectDateDestination.selectReturning).click();
            cy.get(SelectDateDestination.selectDayReturing).last().click();
            cy.get(SelectDateDestination.selectConfirm2).last().click();

        })


    })

    it("Select Adult Children", () => {

        cy.fixture('SelectAdultChildren').then((selectAdultChildren) => {
            cy.xpath(selectAdultChildren.selectAdult).click();
            cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click();
            cy.xpath(selectAdultChildren.selectChildre).click();
            cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();
        })
    })

    it("Select Your Next Destination", () => {

        cy.fixture('SelectNextDetination').then((SelectNextDetination) => {
            cy.xpath(SelectNextDetination.selectLaunch).click();
            cy.xpath('//li[contains(.,"Shenji")]').contains('Shenji').click();
            cy.xpath(SelectNextDetination.btnBook).click()

        })
    })

    it("Resgister Checkout", () => {


        cy.fixture('RegisterCheckout').then((RegisterCheckout) => {
            cy.xpath(RegisterCheckout.btnBook).click()
            cy.get(RegisterCheckout.registerName).type("Andres Contreras");
            cy.get(RegisterCheckout.registerEmail).type("ing@gmail.com");
            cy.get(RegisterCheckout.registerSocilaSecurity).type("123-12-2356");
            cy.get(RegisterCheckout.registerPhone).type("12312312313");
            cy.get('.theme__text___1nV6f').click();
            cy.get('.flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo').click();

        })
    })

})
