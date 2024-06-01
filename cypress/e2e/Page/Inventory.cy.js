import InventoryPage from '../Components/Inventory/components-inventorypage';
import LoginPage from '../Components/loginpage/components-loginpage';

describe('Inventory Page Tests', () => {
  const inventoryPage = new InventoryPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
  });

  it('should add a product to the cart', () => {
    inventoryPage.addFirstProductToCart();
    inventoryPage.cartHasone();
  });

  it('should remove a product from the cart', () => {
    inventoryPage.addFirstProductToCart();
    inventoryPage.removeFirstProductFromCart();
    inventoryPage.verifyCartIsEmpty();
  });

  it('should navigate to the product details page when a product title is clicked', () => {
    inventoryPage.clickFirstProductTitle();
    inventoryPage.verifyProductDetails();
  });

  it('should display the correct number of products', () => {
    inventoryPage.verifyNumberOfProducts(6);
  });

  it('should maintain the state of the cart badge after page refresh', () => {
    inventoryPage.addFirstProductToCart();
    cy.reload();
    inventoryPage.verifyCartBadgeQuantity(1);
  });

  it('should allow multiple products to be added to the cart', () => {
    inventoryPage.addAllProductsToCart();
   
    inventoryPage.verifyCartBadgeQuantity(6);
  });

  it('should display product details when clicking on the product image', () => {
    inventoryPage.getProductImages().first().click();
    inventoryPage.verifyProductDetails();
  });

});