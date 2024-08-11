class RegisterPage {
  fillRegistrationForm(user) {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#confirmPassword').type(user.confirmPassword);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export const registerPage = new RegisterPage();
  
  export default CheckoutPage;