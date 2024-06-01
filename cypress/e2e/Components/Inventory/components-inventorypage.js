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

  selectSortOption(option) {
    const validOptions = ['az', 'za', 'lohi', 'hilo'];
    if (validOptions.includes(option)) {
      cy.get('.product_sort_container').select(option);
    } else {
      throw new Error(`Invalid sort option: ${option}`);
    }
  }

  addFirstProductToCart() {
    this.getProductCards().first().find('button').contains('Add to cart').click();
  }

  removeFirstProductFromCart() {
    this.getProductCards().first().find('button').contains('Remove').click();
  }

  navigateToCart() {
    cy.get('.shopping_cart_link').click();
  }


clickFirstProductTitle() {
  this.getProductTitles().first().click();
}

verifyCartBadgeQuantity(expectedQuantity) {
  cy.get('.shopping_cart_badge').should('contain', expectedQuantity);
}

verifyCartIsEmpty() {
  cy.get('.shopping_cart_badge').should('not.exist');
}

verifyProductDetails() {
  cy.url().should('include', '/inventory-item.html?id=');
}

addAllProductsToCart() {
  this.getProductCards().each(() => {
    cy.get('button').contains('Add to cart').click();
  });
}

verifyNumberOfProducts(expectedNumber) {
  this.getProductCards().should('have.length', expectedNumber);
}

verifySaleLabelOnProducts() {
  this.getProductCards().each((card) => {
    if (Cypress.$(card).find('.inventory_item_label').length > 0) {
      cy.wrap(card).find('.inventory_item_label').should('contain', 'SALE');
    }
  });
}
}


export default InventoryPage;