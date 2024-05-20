class InventoryPage {
    visit() {
      cy.visit('https://www.saucedemo.com/inventory.html');
    }
  
    getProductCards() {
      return cy.get('.inventory_item');
    }
  
    getProductImages() {
      return cy.get('.inventory_item_img');
    }
  
    getProductTitles() {
      return cy.get('.inventory_item_name');
    }
  
    getProductDescriptions() {
      return cy.get('.inventory_item_desc');
    }
  
    getProductPrices() {
      return cy.get('.inventory_item_price');
    }
  
  }
  
  export default InventoryPage;