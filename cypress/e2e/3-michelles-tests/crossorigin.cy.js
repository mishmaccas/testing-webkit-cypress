context('visit testing with webkit', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
        cy.viewport("macbook-15")
    })

    it('cross origin', () => {

        cy.visit("search?q=horse")

        cy.origin('https://github.com', { args: { hits } }, ({ hits }) => {

            cy.visit('/')
        })

    })


})
})
