class LoginPage1 {
    visit() {
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login'); 
    }
  
    fillUsername(name) {
        cy.get('#input-email').type(name);
    }
  
    fillPassword(password) {
        cy.get('#input-password').type(password);
    }
  
    submit() {
        cy.get('form > .btn').click();
    }
  }
  export default LoginPage1; 