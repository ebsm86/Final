class CheckoutPage {
    visit() {
      cy.visit('https://www.saucedemo.com/checkout-step-one.html');
    }
  
    fillFirstName(firstName) {
      cy.get('[data-test="firstName"]').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('[data-test="lastName"]').type(lastName);
    }
  
    fillPostalCode(postalCode) {
      cy.get('[data-test="postalCode"]').type(postalCode);
    }
  
    continueCheckout() {
      cy.get('[data-test="continue"]').click();
    }
  
    finishCheckout() {
      cy.get('[data-test="finish"]').click();
    }
  
    getErrorMessage() {
      return cy.get('[data-test="error"]');
    }
  }
  
  export default CheckoutPage;