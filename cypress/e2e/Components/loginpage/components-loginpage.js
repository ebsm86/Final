class LoginPage {
  fillLoginForm(username, password) {
    cy.get('#email').type(username);
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export const loginPage = new LoginPage();