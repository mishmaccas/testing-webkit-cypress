context('Fixture files testing with webkit', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
        cy.viewport("macbook-15")
    })
  
    it('try a fixture', () => {

        cy.visit("search?q=horse")

        cy.visit("https://github.com/")

        cy.fixture('example.json').as('example');
        cy.get('input[name=q]').should("be.visible")
        cy.get('@example').then((data) => {
            cy.log(data.name)
        });
       
    })
})
