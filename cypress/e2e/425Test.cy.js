
// function login() {
//   cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
//   cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
//   cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector
//   cy.get('button[type="submit"].action.login.primary').click();
//   cy.url().should('include', '/member'); // Assert successful login
// }
describe('425degree - Test all ECs', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test on uncaught exceptions
    return false;
  });
  beforeEach(() => {
    cy.viewport(1920, 1080);});
  it('EC 1: Click logo and redirect to homepage', () => {
    // Set viewport to 1920x1080 (your screen resolution)
    cy.viewport(1920, 1080);
    
    // Visit the page
    cy.visit('https://www.425degree.com/');
    // Click the logo
    cy.get('.main-logo.hidden-xs').click();
    // Take a screenshot of the visible area (your current viewport)
    cy.scrollTo('top'); // Scroll to the top of the page
    cy.screenshot('EC1-screenshot', { capture: 'viewport' });
  
  });
  



  it('EC 2: Click on the iPhone Cases category icon', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.425degree.com/');  // Replace with the page you're testing
    cy.get('.cat-menu-icon[alt="iPhone Cases"]').click();  // Select the icon with the alt text
    cy.url().should('eq', 'https://www.425degree.com/case/apple-iphone.html');  // Replace '/category' with the actual URL that it redirects to
    cy.scrollTo('top'); // Scroll to the top of the page
    cy.screenshot('EC2-screenshot', { capture: 'viewport' });
  });
  

  it('EC 3: Click on a product to view its details page', () => {
    // Visit the page that contains the product grid
    cy.visit('https://www.425degree.com/case/apple-iphone.html');

    // Locate the first product's image or name link and click on it
    cy.get('.product-item-info a.product-item-link')  // Adjusted selector to find the product link
      .first()  // Click the first product in the grid
      .click();

    // Verify that the new page loads successfully (check URL or title)
    cy.url().should('include', 'case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');  // Replace with a specific part of the product URL
    cy.get('h1.page-title span').should('contain', 'Case-Mate Ultra Tough Plus D3O');  // Verify the product name is shown on the new page
    cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC3-screenshot', { capture: 'viewport' });
});

  

it('EC 4: Add product to favorites', () => {
  // Visit the specific product page
  cy.visit('https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');
  
  // Correct selector targeting the 'Add to Wishlist' button
  cy.get('button.action.towishlist').click();  // Adjusted to use the correct button selector

  // Check that the login popup appears after clicking 'Add to Wishlist'
  cy.get('.cdz-popup-inner').should('be.visible');  // Check if the popup appears
  cy.get('input[name="login[username]"]').should('be.visible');  // Check if the email input is visible
  cy.get('input[name="login[password]"]').should('be.visible');  // Check if the password input is visible

  // Ensure the URL remains the same (no redirect on wishlist action)
  cy.url().should('eq', 'https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');
  cy.scrollTo('top'); // Scroll to the top of the page
  cy.screenshot('EC4-screenshot', { capture: 'viewport' });
});


it('EC 5: Log in and navigate to member page', () => {
  // Visit the login page
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
  
  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com');  // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425');  // Correct password input selector
  
  // Click the first login button found with the correct selector
  cy.get('form#login-form button[type="submit"].action.login.primary').click();


  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');  // Check that the URL is correct
  cy.scrollTo('top'); // Scroll to the top of the page
  cy.screenshot('EC5-screenshot', { capture: 'viewport' });
});



it('EC 6: Log in, add product to favorites, and navigate to wishlist', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
  
  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com');  // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425');  // Correct password input selector
  
  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();

  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Step 2: Navigate to the product page
  cy.visit('https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');

  // Step 3: Add the product to favorites (wishlist)
  cy.get('button.action.towishlist').click();

  // Step 4: Assert that the success message appears
  cy.get('.message.cdz-translator.success').should('be.visible')  // Check if the success message is visible
    .and('contain', 'ถูกเพิ่มในรายการโปรดของคุณแล้ว');  // Check if it contains the expected text

  // Step 5: Click on the wishlist link to navigate to the wishlist
  cy.get('#top-wishlist').click();

  // Step 6: Assert that the wishlist contains the added product
  cy.url().should('eq', 'https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');
  cy.scrollTo('top'); // Scroll to the top of the page
  cy.screenshot('EC6-screenshot', { capture: 'viewport' });
});




it('EC 7: Increase product quantity on product page', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com');  // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425');  // Correct password input selector

  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();

  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Step 2: Visit the product page
  cy.visit('https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');

  // Step 3: Click the increase button 3 times to set quantity to 3
  for (let i = 0; i < 3; i++) {
      cy.get('button[data-role="change_cart_qty"].increase').first().click(); // Click the increase button
      cy.wait(500); // Wait for 500ms to allow UI to update
  }

  // Step 4: Click the 'Add to Wishlist' button
  cy.get('button.action.towishlist').first().click(); // Make sure to click the first button

  // Step 5: Verify that the item was added successfully
  cy.url().should('eq', 'https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');
  cy.scrollTo('top'); // Scroll to the top of the page
  cy.screenshot('EC7-screenshot', { capture: 'viewport' });
});

it('EC 8: Increase product quantity beyond stock', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com');  // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425');  // Correct password input selector

  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();

  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Step 2: Visit the product page
  cy.visit('https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');

  // Step 3: Try to make the quantity input visible before interacting
cy.get('.cart-qty') // Adjust this selector to ensure it selects the correct container
.should('be.visible') // Ensure that the quantity box is visible
.find('input[name="qty"]') // Find the input field within the box
.should('be.visible') // Ensure the input field is visible
.clear({ force: true }) // Clear the input field
.type('250', { force: true }); // Attempt to type invalid characters

  // Step 4: Click the 'Add to Wishlist' button
  cy.get('button.action.towishlist').first().click(); // Click the first 'Add to Wishlist' button

  // Step 5: Verify that the item was added successfully
  cy.get('.message.cdz-translator.success')
    .should('be.visible')
    .and('contain', 'Case-Mate Ultra Tough Plus D3O with MagSafe เคส iPhone 16 Pro Max - Clear ถูกเพิ่มในรายการโปรดของคุณแล้ว');
    cy.scrollTo('top'); // Scroll to the top of the page
    cy.screenshot('EC8-screenshot', { capture: 'viewport' });
});


it('EC 9: Add product to cart from product page', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
  
  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com');  // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425');  // Correct password input selector
  
  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();
  
  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');
  
  // Step 2: Visit the specific product page
  cy.visit('https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html?qty=5');
  
  // Step 3: Click the "Add to Cart" button
  cy.get('button#product-addtocart-button') // Select the add to cart button by its ID
    .click(); // Click the button to add the product to the cart
  
    cy.get('.minicart-popup', { timeout: 10000 }) // Wait up to 10 seconds for the element to appear
    .should('be.visible'); // Assert that it is visible
    cy.scrollTo('top'); // Scroll to the top of the page
    cy.screenshot('EC9-screenshot', { capture: 'viewport' });

});


it('EC 10: Enter invalid letters in product quantity field', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector
  
  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();
  
  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');
  
  // Step 2: Visit the product page
  cy.visit('https://www.425degree.com/case/case-mate-ultra-tough-plus-d3o-with-magsafe-iphone-16-pro-max-clear.html');
  
  // Step 3: Ensure the quantity box is visible
  cy.get('.cart-qty') // Adjust this selector to ensure it selects the correct container
    .should('be.visible') // Ensure that the quantity box is visible
    .find('input[name="qty"]') // Find the input field within the box
    .should('be.visible') // Ensure the input field is visible
    .clear({ force: true }) // Clear the input field
    .type('abc', { force: true }); // Attempt to type invalid characters

  // Step 4: Validate that the input field has not accepted the invalid input
  cy.get('input[name="qty"]').should('not.have.value', 'abc'); // Ensure the field does not have 'abc'
  // cy.get('input[name="qty"]').should('have.value', ''); // Ensure the field is empty after typing invalid characters

  cy.get('button[data-action="add-to-wishlist"]') // Adjust the selector based on your actual wishlist button
  .should('be.visible') // Ensure the button is visible before clicking
  .click();
  cy.scrollTo('top'); // Scroll to the top of the page
  cy.screenshot('EC10-screenshot', { capture: 'viewport' });

});




it('EC 11: Decrease quantity without using the menu', () => {
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
    .type('1') // Set the quantity to 1
     .type('{enter}');

  cy.get('a[data-role="cdz-dd-trigger"].action.showcart') // Use the appropriate selector for the cart link
     .should('be.visible') // Ensure the cart link is visible before clicking
     .click(); // Click the cart link
     cy.scrollTo('top'); // Scroll to the top of the page
     cy.screenshot('EC11-screenshot', { capture: 'viewport' });
});



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
cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC12-screenshot', { capture: 'viewport' });
});

it('EC 13: Add to cart without using edit menu', () => {
  // Step 1: Log in to the account
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Type the email and password into the correct input fields
  cy.get('#email').type('jetsadasomporn2003@gmail.com'); // Correct email input selector
  cy.get('#pass').type('05092546jetsadasomporn1New&425'); // Correct password input selector

  // Click the login button
  cy.get('form#login-form button[type="submit"].action.login.primary').click();

  // Assert that the URL includes '/member' after successful login
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Step 2: Navigate to the product page
  cy.visit('https://www.425degree.com/case/apple-iphone.html');

  cy.get('a[data-action="add-to-wishlist"]').first().click();

  // Step 4: Click the add to cart button
  cy.get('#top-wishlist')
     .should('be.visible') // Ensure the wishlist link is visible before clicking
     .click(); // Click the wishlist link

  // // Step 5: Assert that the product has been added to the cart
  // cy.get('.cart') // Adjust the selector for the cart element
  //   .should('contain', 'Product Name'); // Check for the presence of the product name in the cart
  cy.scrollTo('top'); // Scroll to the top of the page
  cy.screenshot('EC13-screenshot', { capture: 'viewport' });
});


it('EC 14: Enter letters in quantity without using edit menu', () => {
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

  // Step 3: Access the quantity input field directly and attempt to type letters
  cy.get('input[name="qty"]').first() // Adjust based on your actual HTML
    .clear() // Clear the input field first
    .type('abc', { force: true }) // Attempt to type invalid characters
    .type('{enter}'); // Simulate pressing the Enter key
    cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC14-screenshot', { capture: 'viewport' });
});


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

  cy.get('button[data-role="tocart"]').click();

  cy.get('a[data-role="cdz-dd-trigger"].action.showcart')
    .should('be.visible') // Ensure the cart link is visible before clicking
    .click(); // Click the cart link
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
  cy.get('.error-message').should('contain', 'Exceeds stock'); // Adjust this based on the actual error message
  cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC16-screenshot', { capture: 'viewport' });
});

// EC 17: Enter letters in quantity via edit menu
it('EC 17: Enter letters in quantity via edit menu', () => {
  cy.visit('https://www.425degree.com/customer/account/login/referer/aHR0cHM6Ly93d3cuNDI1ZGVncmVlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');

  // Log in
  cy.get('#email').type('jetsadasomporn2003@gmail.com');
  cy.get('#pass').type('05092546jetsadasomporn1New&425');
  cy.get('form#login-form button[type="submit"].action.login.primary').click();
  cy.url().should('eq', 'https://www.425degree.com/customer/account/');

  // Navigate to the wishlist
  cy.get('#top-wishlist').click();
  cy.get('a.details.md-icon-button.launch.md-ink-ripple').click();

  // Enter letters in quantity
  cy.get('input[data-role="qty"]').first().clear().type('abc'); // Adjusting based on provided selector
  cy.get('input[data-role="qty"]').should('have.value', ''); // Expecting the value to be empty
  cy.scrollTo('top'); // Scroll to the top of the page
cy.screenshot('EC17-screenshot', { capture: 'viewport' });
});


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

})
