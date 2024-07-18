describe('App test E2E', () => {
  it('Doing a search, change the url and display the result and play audio', () => {
    cy.visit('http://localhost:3000');
    cy.get('[name="search"]').type('keyboard')

    cy.get('#search-button').click();

    cy.url().should('include', '/search')

    cy.get('#result-title')

    if (cy.get('#play-button')) {
      cy.get('#play-button').click()
    }
  })

  it('Doing a search, change the url and display the result (without audio)', () => {
    cy.visit('http://localhost:3000');
    cy.get('[name="search"]').type('react')

    cy.get('#search-button').click();

    cy.get('#result-title')

    cy.url().should('include', '/search');
  })

  it('Show error when word does not exist', () => {
    cy.visit('http://localhost:3000');
    cy.get('[name="search"]').type('effihweifu')

    cy.get('#search-button').click();

    cy.get('#error-message')
  });

  it('Open the history and select an item', () => {
    cy.visit('http://localhost:3000');

    const values = {
      hi: 'hi',
      keyboard: 'keyboard'
    }

    const input = cy.get('[name="search"]')
    const button = cy.get('#search-button');
    input.type(values.hi)
    button.click();

    input.clear()

    input.type(values.keyboard)
    button.click();

    cy.get('#historial-button').click();

    const child = cy.get('#historial-list').children()
    child.last().click()

    cy.get('#result-title').contains(values.hi)
  })
})