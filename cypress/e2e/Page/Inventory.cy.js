import InventoryPage from '../Components/Inventory/components-inventorypage';
import LoginPage from '../Components/loginpage/components-loginpage';

describe('Inventory Page Tests', () => {
  const inventoryPage = new InventoryPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.viewport(414, 896); 
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
  });

  it('should display product cards', () => {
    inventoryPage.getProductCards().should('have.length.at.least', 1);
  });

  it('should display images for each product card', () => {
    inventoryPage.getProductCards().each((card) => {
      cy.wrap(card).find('.inventory_item_img').should('be.visible');
    });
  });

  it('should display titles for each product card', () => {
    inventoryPage.getProductTitles().each((title) => {
      cy.wrap(title).should('not.be.empty');
    });
  });

  it('should display descriptions for each product card', () => {
    inventoryPage.getProductDescriptions().each((desc) => {
      cy.wrap(desc).should('not.be.empty');
    });
  });

  it('should display prices for each product card', () => {
    inventoryPage.getProductPrices().each((price) => {
      cy.wrap(price).should('not.be.empty');
    });
  });

  it('should navigate to the product details page when a product title is clicked', () => {
    inventoryPage.getProductTitles().first().click();
    cy.url().should('include', '/inventory-item.html?id=');
  });

  it('should add a product to the cart', () => {
    inventoryPage.getProductCards().first().within(() => {
      cy.get('button').contains('Add to cart').click();
    });
    cy.get('.shopping_cart_badge').should('contain', 1);
  });

  it('should remove a product from the cart', () => {
    
    inventoryPage.getProductCards().first().within(() => {
      cy.get('button').contains('Add to cart').click();
    });
    
    inventoryPage.getProductCards().first().within(() => {
      cy.get('button').contains('Remove').click();
    });
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('should sort products by price (low to high)', () => {
    cy.get('.product_sort_container').select('lohi');
    let previousPrice = 0;
    inventoryPage.getProductPrices().each(($price) => {
      const currentPrice = parseFloat($price.text().replace('$', ''));
      expect(currentPrice).to.be.at.least(previousPrice);
      previousPrice = currentPrice;
    });
  });

  it('should sort products by price (high to low)', () => {
    cy.get('.product_sort_container').select('hilo');
    let previousPrice = Number.MAX_VALUE;
    inventoryPage.getProductPrices().each(($price) => {
      const currentPrice = parseFloat($price.text().replace('$', ''));
      expect(currentPrice).to.be.at.most(previousPrice);
      previousPrice = currentPrice;
    });
  });

  it('should have functional navigation to the shopping cart', () => {
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
  });

  it('should display the correct number of products', () => {
    inventoryPage.getProductCards().should('have.length', 6); // Asumiendo que hay 6 productos en total
  });

  it('should display a label for products on sale', () => {
    inventoryPage.getProductCards().each((card) => {
      // Asumiendo que algunos productos pueden tener una etiqueta de oferta
      if (cy.wrap(card).find('.inventory_item_label').length > 0) {
        cy.wrap(card).find('.inventory_item_label').should('contain', 'SALE');
      }
    });
  });

  it('should maintain the state of the cart badge after page refresh', () => {
    // Agregar un producto al carrito
    inventoryPage.getProductCards().first().within(() => {
      cy.get('button').contains('Add to cart').click();
    });
    // Refrescar la página
    cy.reload();
    // Verificar que el carrito aún muestra un producto
    cy.get('.shopping_cart_badge').should('contain', 1);
  });

  it('should allow multiple products to be added to the cart', () => {
    inventoryPage.getProductCards().each((card, index) => {
      cy.wrap(card).find('button').contains('Add to cart').click();
      cy.get('.shopping_cart_badge').should('contain', index + 1);
    });
  });

  it('should display product details when clicking on the product image', () => {
    inventoryPage.getProductImages().first().click();
    cy.url().should('include', '/inventory-item.html?id=');
  });

  it('should have a functional breadcrumb navigation', () => {
    // Navegar a la página de detalles del primer producto
    inventoryPage.getProductTitles().first().click();
    // Usar la navegación breadcrumb para volver a la página de inventario
    cy.get('.breadcrumb').contains('All Items').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should show an error message if adding a sold out item to the cart', () => {
    // Asumiendo que hay un producto agotado en la lista
    inventoryPage.getProductCards().contains('SOLD OUT').parent().within(() => {
      cy.get('button').should('be.disabled');
    });
  });

 
});
