class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com'); 
    }
  
    fillUsername(name) {
        cy.get('input[data-test="Username"]').type(name);
    }
  
    fillPassword(password) {
        cy.get('input[data-test="Password"]').type(password);
    }
  
    submit() {
        cy.get('input[data-test="login-button"]').click();
    }
  }
  export default LoginPage; 