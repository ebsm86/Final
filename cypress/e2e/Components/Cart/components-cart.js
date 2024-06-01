class CartPage {
    visit() {
      cy.visit('https://www.saucedemo.com/cart.html');
    }
  
    getCartItems() {
      return cy.get('.cart_item');
    }
  
    getCheckoutButton() {
      return cy.get('.checkout_button');
    }
  
    getContinueShoppingButton() {
      return cy.get('.cart_footer .btn_secondary');
    }
  
    removeItem(itemName) {
      this.getCartItems().contains(itemName).parent().parent().find('button').contains('Remove').click();
    }
  
  }
  
  export default CartPage;