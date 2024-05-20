import InventoryPage from '../Components/Inventory/components-inventorypage';
import CartPage from '../Components/Cart/components-cart';
import CheckoutPage from '../Components/Checkout/components-checkout';
import LoginPage from '../Components/loginpage/components-loginpage';

describe('End-to-End Purchase Test', () => {
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const loginPage = new LoginPage();

  it('should complete an E2E purchase flow', () => {
    
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();

    inventoryPage.getProductCards().eq(0).find('button').click();
    inventoryPage.getProductCards().eq(1).find('button').click();
    inventoryPage.getProductCards().eq(2).find('button').click();

    cy.get('.shopping_cart_link').click();
    cartPage.getCheckoutButton().click();

    checkoutPage.fillFirstName('John');
    checkoutPage.fillLastName('Doe');
    checkoutPage.fillPostalCode('12345');
    checkoutPage.continueCheckout();

    checkoutPage.finishCheckout();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    cy.get('.complete-text').should('contain', 'Your order has been dispatched');
  });
});