
describe('425degree - Test all ECs', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test on uncaught exceptions
    return false;
  });
//  it('EC 12: Increase quantity beyond stock without menu', () => {
//     // Step 1: Log in to the account
//     cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

//     // Type the email and password into the correct input fields
//     cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
//     cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector

//     // Click the login button
//     cy.get('form#login-form button[type="submit"].action.login.primary').click();

//     // Assert that the URL includes '/member' after successful login
//     cy.url().should('eq', 'https://www.425degree.com/customer/account/');

//     // Step 2: Click on the wishlist link
//     cy.get('#top-wishlist')
//       .should('be.visible') // Ensure the wishlist link is visible before clicking
//       .click(); // Click the wishlist link

//     // Step 3: Access the quantity input field directly and set its value
//     // Use a more specific selector to ensure only one element is selected
//     cy.get('input[name="qty"]').first() // Select the first matching input
//       .clear() // Clear the input field first
//       .type('400') // Set the quantity to 400
//       .type('{enter}'); // Trigger the input (if needed)

//     cy.screenshot('EC12-screenshot', { capture: 'viewport' });
// });

it('EC 12: Increase quantity beyond stock without menu', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector

  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();

  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Step 2: Click on the wishlist link
  cy.get('#top-wishlist')
    .should('be.visible') // Ensure the wishlist link is visible before clicking
    .click(); // Click the wishlist link

  // Step 3: Access the quantity input field directly and set its value
  // Use the appropriate selector for the input field
  cy.get('input[name="qty"]').first() // Adjust based on your actual HTML
    .clear() // Clear the input field first
    .type('400') // Set the quantity to 1
    .type('{enter}');

cy.get('a[data-role="cdz-dd-trigger"].action.showcart') // Use the appropriate selector for the cart link
.should('be.visible') // Ensure the cart link is visible before clicking
.click(); // Click the cart link
cy.screenshot('EC12-screenshot', { capture: 'viewport' });
});
});
// it('EC 11: Decrease quantity without using the menu', () => {
//   // Step 1: Log in to the account
//   cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

//   // Type the email and password into the correct input fields
//   cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
//   cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector

//   // Click the login button
//   cy.get('form#login-form button[type="submit"].action.login.primary').click();

//   // Assert that the URL includes '/member' after successful login
//   cy.url().should('eq', 'https://www.425degree.com/customer/account/');

//   // Step 2: Click on the wishlist link
//   cy.get('#top-wishlist')
//     .should('be.visible') // Ensure the wishlist link is visible before clicking
//     .click(); // Click the wishlist link

//   // Step 3: Access the quantity input field directly and set its value
//   // Use the appropriate selector for the input field
//   cy.get('input[name="qty"]') // Adjust based on your actual HTML
//     .clear() // Clear the input field first
//     .type('1') // Set the quantity to 1

//   cy.get('a[data-role="cdz-dd-trigger"].action.showcart') // Use the appropriate selector for the cart link
//      .should('be.visible') // Ensure the cart link is visible before clicking
//      .click(); // Click the cart link
//   cy.screenshot('EC11-screenshot', { capture: 'viewport' });
// });
// it('EC 14: Enter letters in quantity without using edit menu', () => {
//   // Step 1: Log in to the account
//   cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

//   // Type the email and password into the correct input fields
//   cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
//   cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector

//   // Click the login button
//   cy.get('form#login-form button[type="submit"].action.login.primary').click();

//   // Assert that the URL includes '/member' after successful login
//   cy.url().should('eq', 'https://www.425degree.com/customer/account/');

//   // Step 2: Click on the wishlist link
//   cy.get('#top-wishlist')
//     .should('be.visible') // Ensure the wishlist link is visible before clicking
//     .click(); // Click the wishlist link

//   // Step 3: Access the quantity input field directly and attempt to type letters
//   cy.get('input[name="qty"]') // Adjust based on your actual HTML
//     .clear() // Clear the input field first
//     .type('abc', { force: true }) // Attempt to type invalid characters
//     .type('{enter}'); // Simulate pressing the Enter key
// cy.screenshot('EC14-screenshot', { capture: 'viewport' });
// });