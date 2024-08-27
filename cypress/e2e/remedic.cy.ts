describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cypress-text"]').should("exist")
    .should("have.text", "Book Your Health in a Click. Find the Right Doctor, Anytime, Anywhere.");
  });
  it('should show errors when leaving all fields blank', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-test="cypress-login"]').click();
    cy.get('[data-test="cypress-email"]').should("exist");
    cy.get('[data-test="cypress-password"]').should("exist");
  })

  it('should redirect a user to a Bookings page when filling the form and clicking submit', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="cypress-login1"]').click();
    cy.get('[data-testid="cypress-email1"]').type("wale@example.com");
    cy.get('[data-testid="cypress-password1"]').type("password");
  })
  })