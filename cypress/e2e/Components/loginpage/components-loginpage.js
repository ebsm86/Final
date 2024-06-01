class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com'); 
    }
  
    fillUsername(name) {
      cy.get('[data-test=username]').type(name);
    }

    fillPassword2() {
      cy.get('[data-test=password]').should('have.attr', 'type', 'password');

    }

    fillUsernameStandar() {
      cy.get('[data-test=username]').should('have.value', 'standard_user');
    }
  
    fillPassword(password) {
      cy.get('[data-test=password]').type(password);
    }

    fillPasswordEnter() {
      cy.get('[data-test=password]').type('{enter}');
    }
  
    submit() {
      cy.get('[data-test=login-button]').click();
    }
    submitNotDisabled() {
      cy.get('[data-test=login-button]').should('not.be.disabled');
    }
  
    errorMessage() {
      return cy.get('[data-test=error]');
    }
  }
  
  export default LoginPage;

