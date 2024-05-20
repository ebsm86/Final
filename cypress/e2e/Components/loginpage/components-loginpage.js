class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com'); // Ajustar a la URL correcta si es diferente
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

