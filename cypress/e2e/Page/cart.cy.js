import CartPage from '../Components/Cart/components-cart';
import InventoryPage from '../Components/Inventory/components-inventorypage';
import LoginPage from '../Components/loginpage/components-loginpage';

describe('Cart Tests', () => {
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
    inventoryPage.getProductCards().eq(1).find('button').click();
    
    cy.get('.shopping_cart_link').click();
  });

  it('should display all added items in the cart', () => {
    cartPage.getCartItems().should('have.length', 2); 
  });

  it('should allow user to remove an item from the cart', () => {
    cartPage.removeItem('Sauce Labs Backpack');
    cartPage.getCartItems().should('have.length', 1);
  });

  it('should allow user to continue shopping', () => {
    cartPage.getContinueShoppingButton().click();
    cy.url().should('include', '/inventory.html');
  });

  it('should allow user to navigate to checkout', () => {
    cartPage.getCheckoutButton().click();
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('should update the cart badge when an item is removed', () => {
    cartPage.removeItem('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('contain', 1);
  });
});
