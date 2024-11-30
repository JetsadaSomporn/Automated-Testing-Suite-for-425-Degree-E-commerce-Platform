
//EC 15: Decrease quantity using edit menu
it('EC 15: Decrease quantity using edit menu', () => {
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Log in
  cy.get('#email').type('jetsadasomporn2003@gmail.com');
  cy.get('#pass').type('05092546jetsadasomporn1New&425');
  cy.get('form#login-form button[type="submit"].action.login.primary').click();
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Navigate to the wishlist
  cy.get('#top-wishlist').click();
  cy.get('a.details.md-icon-button.launch.md-ink-ripple').click();

  // Decrease quantity
  cy.get('input[data-role="qty"]').first().clear().type('1'); // Adjusting based on provided selector
  cy.get('input[data-role="qty"]').should('have.value', '1');

  // cy.get('button[data-role="tocart"]').click();
  
    cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC15-screenshot', { capture: 'viewport' });
});

// EC 16: Increase quantity beyond stock via edit menu
it('EC 16: Increase quantity beyond stock via edit menu', () => {
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Log in
  cy.get('#email').type('jetsadasomporn2003@gmail.com');
  cy.get('#pass').type('05092546jetsadasomporn1New&425');
  cy.get('form#login-form button[type="submit"].action.login.primary').click();
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Navigate to the wishlist
  cy.get('#top-wishlist').click();
  cy.get('a.details.md-icon-button.launch.md-ink-ripple').click();

  // Increase quantity beyond stock
  cy.get('input[data-role="qty"]').first().clear().type('100'); // Adjusting based on provided selector
  // cy.get('.error-message').should('contain', 'Exceeds stock'); // Adjust this based on the actual error message
  cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC16-screenshot', { capture: 'viewport' });
});