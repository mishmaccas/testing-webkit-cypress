context('visit testing with webkit', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl); // "https://www.knox.vic.gov.au/"
        
        cy.viewport("macbook-16")
    })

    it('visit knox council', () => {

        cy.visit("our-services/animals-and-pets/pet-registration/pet-registration")
        cy.get("h1").contains("Register my pet or renew registration").should("be.visible")

        cy.visit("our-services/bins-rubbish-and-recycling/hard-rubbish-collection")
        cy.get("h1").contains("Hard rubbish collection").should("be.visible")

    })

    it.only('visit aesop', () => {

        cy.visit("jp/")
        cy.get("h1").contains("空間の詩情").should("be.visible")

        cy.visit("c/skin/tone")
        cy.get("h1").contains("Tone").should("be.visible")

        cy.visit("p/home/home-formulations/aganice-aromatique-candle/")
        cy.get("h1").contains("Aganice Aromatique Candle").should("be.visible")

    })

})
