describe('Display list of employees', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display a header', () => {
    cy.get('#header').should('contain', 'Employee List')
  })

  it('is expeted to display a list with 6 items', () => {
    cy.get('#employee-list').within(() => {
      cy.get('.employee-item').should('have.length', 6)
    })
  })

  it('is expected list items to display the expected content', () => {
    cy.get('#employee-list').within(() => {
      cy.get('.employee-item')
      .first()
      // .find('.name')
      .should('contain', 'George Bluth')
    })
  })
})