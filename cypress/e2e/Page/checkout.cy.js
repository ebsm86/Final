import CheckoutPage from '../Components/Checkout/components-checkout';
import CartPage from '../Components/Cart/components-cart';
import InventoryPage from '../Components/Inventory/components-inventorypage';
import LoginPage from '../Components/loginpage/components-loginpage';

describe('Checkout Tests', () => {
  const checkoutPage = new CheckoutPage();
  const cartPage = new CartPage();
  const inventoryPage = new InventoryPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    
    cy.viewport(414, 896); 
    
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    
    //inventoryPage.visit();
    inventoryPage.getProductCards().first().find('button').click();
    cy.get('.shopping_cart_link').click();
    cartPage.getCheckoutButton().click();
  });

  it('should require first name', () => {
    checkoutPage.fillLastName('Doe');
    checkoutPage.fillPostalCode('12345');
    checkoutPage.continueCheckout();
    checkoutPage.getErrorMessage().should('contain', 'Error');
  });

  it('should require last name', () => {
    checkoutPage.fillFirstName('John');
    checkoutPage.fillPostalCode('12345');
    checkoutPage.continueCheckout();
    checkoutPage.getErrorMessage().should('contain', 'Error');
  });

  it('should require postal code', () => {
    checkoutPage.fillFirstName('John');
    checkoutPage.fillLastName('Doe');
    checkoutPage.continueCheckout();
    checkoutPage.getErrorMessage().should('contain', 'Error');
  });

  it('should navigate to the checkout overview page on successful information submission', () => {
    checkoutPage.fillFirstName('John');
    checkoutPage.fillLastName('Doe');
    checkoutPage.fillPostalCode('12345');
    checkoutPage.continueCheckout();
    cy.url().should('include', '/checkout-step-two.html');
  });

  it('should complete the checkout process', () => {
    checkoutPage.fillFirstName('John');
    checkoutPage.fillLastName('Doe');
    checkoutPage.fillPostalCode('12345');
    checkoutPage.continueCheckout();
    checkoutPage.finishCheckout();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});
 