describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cypress-text"]').should("exist")
    .should("have.text", "We Believe Everyone Should Have Easy Access To Healthcare.");
  });
  })