describe('My First Test', () => {
  it('visits example page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.visit('https://youtube.com')
  });
});
