class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com'); 
    }
  
    fillUsername(name) {
      cy.get('[data-test=username]').type(name);
    }
  
    fillPassword(password) {
      cy.get('[data-test=password]').type(password);
    }
  
    submit() {
      cy.get('[data-test=login-button]').click();
    }
  
    errorMessage() {
      return cy.get('[data-test=error]');
    }
  }
  
  export default LoginPage;

