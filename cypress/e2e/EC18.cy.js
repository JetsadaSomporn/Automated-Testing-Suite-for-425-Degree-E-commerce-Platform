//EC 18: Share favorite product via email
it('EC 18: Share favorite product via email', () => {
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Log in
  cy.get('#email').type('jetsadasomporn2003@gmail.com');
  cy.get('#pass').type('05092546jetsadasomporn1New&425');
  cy.get('form#login-form button[type="submit"].action.login.primary').click();
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Navigate to the wishlist
  cy.get('#top-wishlist').click();
  cy.get('a.details.md-icon-button.launch.md-ink-ripple').click();

  // Click on the share button
  cy.get('button[name="save_and_share"].action.share').click();

  // Enter email to share the product
  cy.get('textarea[name="emails"]')
    .type('jetsadasomporn2003@gmail.com')
    .should('have.value', 'jetsadasomporn2003@gmail.com'); // Ensure the email is entered

  // Click the submit button to share
  cy.get('button[type="submit"].action.submit.primary').click();

  // Verify success message
  // cy.get('.success-message').should('contain', 'Email sent successfully'); // Adjust the selector as necessary
  cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC18-screenshot', { capture: 'viewport' });
});